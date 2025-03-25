import React, { useState } from "react";
import "./model.css";
import Inputparameter from "./inputparameter";
import Navbar from "./navbar";

function Model() {
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
            alert(`Prediction: ${data.prediction}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <><Navbar />
        <div className="modelbody">
            <form className="modelform" method="POST" onSubmit={handleSubmit}>
                <div className="mainbox">
                    {/* {Object.keys(formData).map((key) => (
                        <Inputparameter key={key} name={key} onChange={handleChange} />
                    ))} */}


         <Inputparameter name="Age" onChange={handleChange}/>
         <Inputparameter name="Sex" onChange={handleChange}/>
         <Inputparameter name="cp" onChange={handleChange}/>
         <Inputparameter name="trestbps" onChange={handleChange}/>
         <Inputparameter name="chol" onChange={handleChange}/>
         <Inputparameter name="fbs" onChange={handleChange}/>
         <Inputparameter name="restecg" onChange={handleChange}/>
         <Inputparameter name="thalach" onChange={handleChange}/>
         <Inputparameter name="exang" onChange={handleChange}/>
         <Inputparameter name="oldpeak" onChange={handleChange}/>
         <Inputparameter name="slope" onChange={handleChange}/>
         <Inputparameter name="ca" onChange={handleChange}/>
         <Inputparameter name="thal" onChange={handleChange}/>


                </div>
                <button type="submit" className="startprediction">Start Prediction</button>
            </form>
        </div></>
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