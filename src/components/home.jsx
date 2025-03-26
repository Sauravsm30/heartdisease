import React from "react";
import bgheart from "../assets/bgheart.png"
import "./home.css"
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import About from "./about";
import heart from "../assets/heartloader.gif"
import { useState,useEffect } from "react";

function Home(){

    const [showLoading, setShowLoading] = useState(true);
    
        useEffect(() => {
            // Hide loading after 3 seconds
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 500);
    
            // Cleanup timer on component unmount
            return () => clearTimeout(timer);
        }, []);


    function gotomodel(){
        navigate("/model")
    }
    const navigate = useNavigate();
    return <>

    {showLoading && <div className="loadingscreen"><div className="heartloader"><img src={heart} alt="" width={"200px"} /></div> </div>}
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