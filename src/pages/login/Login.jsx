import React, { useState } from 'react'
import "./login.css";
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { useEffect } from 'react';

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  useEffect(() => {
    if(user){
      navigate(`/images/${user._id}`);
    }
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange=(e)=>{
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://sidimggallery.herokuapp.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      const id=user._id;
      console.log(id);
      navigate(`/images/${id}`)
    } catch (err) {
      
    }
  };
  console.log(user);
  return (
    <div className='login'>
      <h1>Login into Image Gallery</h1>
      <input type="text" placeholder='Username' className='inputData' id="username" onChange={handleChange}/>
      <input type="password" placeholder='Password' className='inputData' id="password" onChange={handleChange}/>
      <button variant="outline-success" id='loginBtn' disabled={loading} onClick={handleClick}>Login</button>{' '}
    </div>
  )
}

export default Login