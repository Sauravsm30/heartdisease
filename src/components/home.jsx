import React from "react";
import bgheart from "../assets/bgheart.png"
import "./home.css"
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import About from "./about";

function Home(){
    function gotomodel(){
        navigate("/model")
    }
    const navigate = useNavigate();
    return <>
    <Navbar />
     <div className="homebg">
        <img src={bgheart} className="bgheart"></img>
        <div className="homebody">
           <div className="welcometo">Welcome to</div>
           <div className="hdp">Heart Disease Predictor</div>
           <div className="startbutton" onClick={gotomodel}>Start Predicting</div>
             </div>
             <About />
    </div>
    
    </>
   
}

export default Home