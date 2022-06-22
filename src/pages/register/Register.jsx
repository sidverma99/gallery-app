import React, { useContext } from 'react'
import "./register.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

function Register() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [error,setError]=useState(false);
    const navigate=useNavigate();
    const { user, loading, dispatch } = useContext(AuthContext)

    useEffect(() => {
        if(user){
            navigate(`/images/${user._id}`);
        }
    });
    const handleRegister=async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res=await axios.post("https://sidimggallery.herokuapp.com/api/auth/register",{
                username,
                password,
                email
            });
            console.log(res.data);
            navigate("/login");
        } catch(err){
            setError(true);
            console.log(error);
            console.log(err);
        }
    }
    return (
    <div className='register'>
        <h1>Register into Image Gallery</h1>
        <input type="text" placeholder='Email' className='inputData' onChange={e=>setEmail(e.target.value)} />
        <input type="text" placeholder='Username' className='inputData'  onChange={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder='Password' className='inputData' onChange={e=>setPassword(e.target.value)} />
        <Button variant="outline-success" id='registerBtn' onClick={handleRegister} >Register</Button>{' '}
        <div id="snackbar">User Registered</div>
    </div>
    )
}

export default Register;