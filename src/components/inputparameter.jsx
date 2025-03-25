import React from "react";
import "./inputparameter.css"
import { useState } from "react";

function Inputparameter(prop){
    const [value, setValue] = useState(50); // State to track the range input

    if (prop.name === "Age") {
        return (
            <div className="parameterbox">
                <label htmlFor="Age">Age: </label>
                <div>{value}</div>
                <input
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
        <select name="Sex" id="Sex" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={0}>Female</option>
            <option value={1}>Male</option>
        </select>
     </div>
    }
    if(prop.name == "cp"){
        return <div className="parameterbox">Chest pain type:
        <select name="cp" id="cp" className="cp" onChange={prop.onChange}>
            <option></option>
            <option value={0}>Typical Angina</option>
            <option value={1}>Atypical Angina</option>
            <option value={2}>Anginal pain</option>
            <option value={3}>Asymptomatic</option>
        </select>
     </div>
    }
    if(prop.name == "fbs"){
        return <div className="parameterbox">{prop.display_name}
        <select name="fbs" id="fbs" className="sex" onChange={prop.onChange}>
            <option></option>
            <option value={1}>greater than 120</option>
            <option value={0}>less than 120</option>
        </select>
     </div>
    }
    return <div className="parameterbox">
       <input name={prop.name} placeholder={prop.display_name} onChange={prop.onChange} className="parameterinput"/>
    </div>
}

export default Inputparameter
