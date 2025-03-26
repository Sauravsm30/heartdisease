import React, { useState,useEffect } from "react";
import "./model.css";
import Inputparameter from "./inputparameter";
import Navbar from "./navbar";
import Result from "./result";
import "./home.css"
import heart from "../assets/heartloader.gif"

function Model() {
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
                // Hide loading after 3 seconds
                const timer = setTimeout(() => {
                    setShowLoading(false);
                }, 1000);
        
                // Cleanup timer on component unmount
                return () => clearTimeout(timer);
            }, []);
    
    function handlecloseclicked(){
        setResult("")
        setPred()
        setResultStatus(false)
    }
    const [result,setResult] = useState("");
    const [formData, setFormData] = useState({
        Age: 0,
        Sex: 0,
        cp: 0,
        trestbps: 0,
        chol: 0,
        fbs: 0,
        restecg: 0,
        thalach: 0,
        exang: 0,
        oldpeak: 0,
        slope: 0,
        ca: 0,
        thal: 0
    });
    const[resultStatus, setResultStatus] = useState(false);
    const[pred,setPred] = useState()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // alert(`Prediction: ${data.prediction}`);
            if(data.prediction == 1){
                setResult("Heart disease detected")
                setPred(true)
            }
            else if(data.prediction == 0){
                setResult("No Heart disease detected")
                setPred(false)
            }
            setResultStatus(true);
        } catch (error) {
            console.error("Error:", error);
        }
        
    };

    return (
        
        <><Navbar />
         {showLoading && <div className="loadingscreen"><div className="heartloader"><img src={heart} alt="" width={"200px"} /></div> </div>}
        <div className="modelbody">
            <div className="modelheading">Heart Disease Predictor</div>
            <form className="modelform" method="POST" onSubmit={handleSubmit}>
                <div className="mainbox">
                    {/* {Object.keys(formData).map((key) => (
                        <Inputparameter key={key} name={key} onChange={handleChange} />
                    ))} */}


         <Inputparameter name="Age" display_name="Age:" onChange={handleChange}/>
         <Inputparameter name="Sex" display_name="Sex:"  onChange={handleChange}/>
         <Inputparameter name="cp" display_name="Chest Pain type:"  onChange={handleChange}/>
         <Inputparameter name="trestbps"  display_name="Resting Blood Pressure(in mm/HG):" onChange={handleChange}/>
         <Inputparameter name="chol"  display_name="cholesterol(in mg/dl):" onChange={handleChange}/>
         <Inputparameter name="fbs"  display_name="Fasting Blood Sugar(in mg/dl):" onChange={handleChange}/>
         <Inputparameter name="restecg" display_name="Rest ECG:"  onChange={handleChange}/>
         <Inputparameter name="thalach" display_name="Max Heart Rate:"  onChange={handleChange}/>
         <Inputparameter name="exang" display_name="Exercise induced chest pain:"  onChange={handleChange}/>
         <Inputparameter name="oldpeak" display_name="Oldpeak:"  onChange={handleChange}/>
         <Inputparameter name="slope" display_name="Slope:"  onChange={handleChange}/>
         <Inputparameter name="ca"  display_name="No. of major vessels:" onChange={handleChange}/>
         <Inputparameter name="thal" display_name="Thalassemia:"  onChange={handleChange}/>


                </div>
                <button type="submit" className="startprediction">Start Prediction</button>
            </form>
        </div>
        {resultStatus && <Result result = {result} prediction={pred} onclickwhat={handlecloseclicked}/>}
        </>
    );
}




{/* <div className="parameterbox">
         Age: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    Sex: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    cp: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    trestbps: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    chol: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    fbs: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    restecg: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    thalach: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    exang: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    oldpeak: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    slope: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    ca: <input className="parameterinput"/>
    </div>
    <div className="parameterbox">
    thal: <input className="parameterinput"/>
    </div> */}



export default Model;