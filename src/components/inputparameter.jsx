import React from "react";
import "./inputparameter.css"

function Inputparameter(prop){
    return <div className="parameterbox">
       <label>{prop.name}:</label>  <input onChange={prop.onChange} className="parameterinput"/>
    </div>
}

export default Inputparameter
