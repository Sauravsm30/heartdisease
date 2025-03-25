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
            <option value={0}>Female</option>
            <option value={1}>Male</option>
        </select>
     </div>
    }
    return <div className="parameterbox">
       <input name={prop.name} placeholder={prop.name} onChange={prop.onChange} className="parameterinput"/>
    </div>
}

export default Inputparameter
