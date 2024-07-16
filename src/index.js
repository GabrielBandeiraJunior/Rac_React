import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './RACForm.css'
import Home from './Home.js'  
import RACForm from './RACForm'
import Login from './Login.js'
import Register from './Register'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rac" element={<RACForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
