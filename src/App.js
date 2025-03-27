import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Model from './components/model';
import Home from './components/home';
import Aboutpage from './components/aboutpage';

function App() {
  return <Router>
    <Routes>
      <Route path="/model" element={<Model/>} />
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Aboutpage />}/>
    </Routes>
  </Router>
}

export default App;
