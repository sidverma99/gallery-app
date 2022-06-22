import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import "./navbar.css";
import { AuthContext } from '../../context/authContext';

function Navbar() {
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const handleLogout=()=>{
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}><span className='logo'>IMAGE GALLERY</span></Link>
                {user?(<div className="navItems">
                    <span  className='navButton'>{user.username}</span>
                    <Link to="/"><Button variant="outline-secondary" className='navButton' onClick={handleLogout}>Logout</Button>{' '}</Link>
                </div>):(<div className="navItems">
                    <Link to="/login"><Button variant="outline-secondary" className='navButton'>Login</Button>{' '}</Link>
                    <Link to="/register"><Button variant="outline-secondary" className='navButton'>Register</Button>{' '}</Link>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar