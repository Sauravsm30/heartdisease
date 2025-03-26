import React from "react";
import "./inputparameter.css"
import { useState } from "react";

function Inputparameter(prop){
    const [value, setValue] = useState(0); // State to track the range input

    if (prop.name === "Age") {
        return (
            <div className="parameterbox">
                <label htmlFor="Age">Age: </label>
                <div>{value}</div>
                <input required
                    id="Age"
                    type="range"
                    min="0"
                    max="120"
                    className="slider"
                    value={value}
                    name={prop.name}
                    placeholder={prop.name}
                    onChange={(e) => {
                        setValue(e.target.value); // Update state when the slider moves
                        if (prop.onChange) prop.onChange(e); // Call parent onChange if provided
                    }}
                />
            </div>
        );
    }
    if(prop.name == "Sex"){
        return <div className="parameterbox">Sex:
        <select required name="Sex" id="Sex" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={0}>Female</option>
            <option value={1}>Male</option>
        </select>
     </div>
    }
    if(prop.name == "cp"){
        return <div className="parameterbox">Chest pain type:
        <select required name="cp" id="cp" className="cp" onChange={prop.onChange}>
            <option></option>
            <option value={1}>Typical Angina</option>
            <option value={2}>Atypical Angina</option>
            <option value={3}>Anginal pain</option>
            <option value={4}>Asymptomatic</option>
        </select>
     </div>
    }
    if(prop.name == "fbs"){
        return <div className="parameterbox">{prop.display_name}
        <select required name="fbs" id="fbs" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={1}>greater than 120</option>
            <option value={0}>less than 120</option>
        </select>
     </div>
    }
    if(prop.name == "restecg"){
        return <div className="parameterbox">{prop.display_name}
        <select required name="restecg" id="restecg" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={0}>Normal</option>
            <option value={1}>having ST-T wave abnormality</option>
            <option value={2}>Probable or definite left ventricular hypertrophy</option>
        </select>
     </div>
    }
    if(prop.name == "exang"){
        return <div className="parameterbox">{prop.display_name}
        <select required name="exang" id="exang" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
        </select>
     </div>
    }
    if(prop.name == "slope"){
        return <div className="parameterbox">Slope of peak exercise ST segment:
        <select required name="slope" id="slope" className="sex" onChange={prop.onChange} >
            <option></option>
            <option value={1}>Upsloping</option>
            <option value={2}>Flat</option>
            <option value={3}>Downsloping</option>
        </select>
     </div>
    }
    if(prop.name == "ca"){
        return <div className="parameterbox">No of major vessels coloured:
        <select required name="ca" id="ca" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
     </div>
    }
    if(prop.name == "thal"){
        return <div className="parameterbox">Thalassemia:
        <select required name="thal" id="thal" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={3}>Normal</option>
            <option value={6}>Fixed Defect</option>
            <option value={7}>Reversable Defect</option>
        </select>
     </div>
    }
    return <div className="parameterbox">{prop.display_name}
       <input name={prop.name} required onChange={prop.onChange} className="parameterinput"/>
    </div>
}

export default Inputparameter
