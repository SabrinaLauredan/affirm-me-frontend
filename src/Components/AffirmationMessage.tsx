import React from "react";
import Affirmation from "./Affirmation";
import { useLocation } from "react-router-dom";

//prop interface 
    //response to check-in data = string

const AffirmationMessage = () => {
    const location = useLocation();
    const answer = location.state as any;

    const animation = ""

    return (
        <div>
            <button> back </button>
            <div className="animation">{animation}</div>
            <Affirmation response={answer} />
            {/* <h3>message test</h3> */}
        </div>
    );
}

export default AffirmationMessage;