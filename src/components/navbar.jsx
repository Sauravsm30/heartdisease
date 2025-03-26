import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    function handleHome(){
        navigate('/')
    }
    function handleModel(){
        navigate('/model')
    }


    return <div className="navbar">
        <div className="navitem" onClick={handleHome}>Home</div>
        <div className="navitem" onClick={handleModel}>Model</div>
        <div className="navitem" >About</div>
        <div className="navitem">Contact</div>
    </div>
}

export default Navbar;