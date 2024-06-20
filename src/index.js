import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import App from './App';
import RACForm from './RACForm';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      
        <Route path="/racform" element={<RACForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
