import React, { useEffect, useState } from "react";
import "./result.css";
import feature_importance from "../assets/feature_importance.png";
import confidence from "../assets/confidence_circle.png";
import loading from "../assets/heartloader.gif";

function Result(prop) {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        // Hide loading after 3 seconds
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000);

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="resultbody">
            <div className="resultbox">
                <div className="resultclose" onClick={prop.onclickwhat}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                </div>
                <div className="resultcontent">
                    {prop.prediction && <div className="mainresult" style={{color:"red"}}>{prop.result}</div>}{!prop.prediction && <div className="mainresult" style={{color:"green"}}>{prop.result}</div>}
                
                    <div className="resultimages">
                        <img src={feature_importance} width={"500px"} alt="Feature Importance" />
                       <div className="confidence"><img src={confidence} width={"400px"} alt="Confidence Score" /> <div>confidence score</div> </div> 
                    </div>
                    
                </div>
            </div>

            {/* Show loading result only if showLoading is true */}
            {showLoading && (
                <div className="loadingresult">
                    <div className="loadingclose">
                        <div className="resultclose" onClick={prop.onclickwhat}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                            </svg>
                        </div>
                    </div>
                    <img src={loading} width={"200px"} alt="Loading" />
                </div>
            )}
        </div>
    );
}

export default Result;
