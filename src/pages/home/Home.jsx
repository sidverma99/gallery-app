import React from 'react'
import { useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/intro/Intro';
import Navbar from '../../components/navbar/Navbar';
import UseCase from '../../components/useCase/UseCase';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import { AuthContext } from '../../context/authContext';
import { useEffect } from 'react';

function Home() {
  const navigate=useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext)
  useEffect(() => {
    if(user){
      navigate(`/images/${user._id}`);
    }
  });
  return (
    <div>
      <Navbar/>
      <Intro/>
      <UseCase/>
      <Footer/>
    </div>
  )
}

export default Home