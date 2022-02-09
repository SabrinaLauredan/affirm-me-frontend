import React from "react";
import Affirmation from "./Affirmation";

//prop interface 
    //response to check-in data = string

const AffirmationMessage = ({/*prop*/}) => {

    const animation = ""

    return (
        <div>
            <button> insert back button </button>
            <div className="animation">
                {animation}
            </div>
            <div className="displayMessage">
                {/* <Affirmation response={prop.response} /> */}
            </div>
        </div>

    )
};

export default AffirmationMessage;