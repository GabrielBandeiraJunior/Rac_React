import React, {  } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
   

  return (
    
    <div>
      <h1> Home </h1>
      
      <Link to="/Login">LOGIN</Link> <br/>
      <Link to="/Register">REGISTER</Link> <br/>
      <Link to="/RACForm">RAC</Link> <br/>
      
    </div>
  );
}

