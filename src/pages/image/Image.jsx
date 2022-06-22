import React, { useContext, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCirclePlus,faRectangleXmark,faSquareCaretLeft,faSquareCaretRight,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import "./image.css"
import { AuthContext } from '../../context/authContext'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

function Image() {
    const [slideNumber,setSlideNumber]=useState(0)
    const [open,setOpen]=useState(false);
    const [file,setFile]=useState(null);
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const {data, loadingData, err} = useFetch(`https://sidimggallery.herokuapp.com/api/images/allImage/${user._id}`);
    const navigate=useNavigate();

    const handleClick=(i)=>{
        setOpen(true);
        setSlideNumber(i);
    }
    const handleMove=(dir)=>{
        let newSlideNumber;
        if(data.length===1){
            newSlideNumber=0
        }
        else if(dir==="l"){
            newSlideNumber=slideNumber===0?data.length - 1 : slideNumber-1;
        } else{
            newSlideNumber=slideNumber===data.length - 1?0 : slideNumber+1;
        }
        setSlideNumber(newSlideNumber);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handlePost=async (e)=>{
        e.preventDefault();
        if(file){
            const fileData=new FormData();
            fileData.append("file",file)
            fileData.append("name","navbar.jpeg")
            try{
                await axios.post(`https://sidimggallery.herokuapp.com//api/upload/${user._id}`,fileData);
                console.log(fileData);
                window.location.reload();
            } catch(err){
                console.log(err);
            }
        }
    }

    return (
        <div>
            <Navbar/>
            {open && <div className="slider">
                <FontAwesomeIcon icon={faRectangleXmark} className='close' onClick={()=>handleClose()}/>
                <FontAwesomeIcon icon={faSquareCaretLeft} className='arrow' onClick={()=>handleMove("l")} />
                <div className="sliderWrapper">
                    <img src={data[slideNumber]?.url} alt="" className='sliderImg' />
                </div>
                <FontAwesomeIcon icon={faSquareCaretRight} className='arrow' onClick={()=>handleMove("r")} />
            </div>}
            <form className='icons'>
                <input type="file" id='fileInput' onChange={e=>setFile(e.target.files[0])} />
                <button onClick={handlePost}><FontAwesomeIcon icon={faPaperPlane} className="postIcon"/></button>
            </form>
                <div className='userImages'>
                    {data.map((data,i)=>(
                        <div className="imageWrapper">
                            <img src={data?.url} alt="" className="userImg"  onClick={()=>handleClick(i)}/>
                            <FontAwesomeIcon icon={faTrash} id="deleteIcon" />
                        </div>
                    ))}
                </div>
            
        </div>
    )
}

export default Image