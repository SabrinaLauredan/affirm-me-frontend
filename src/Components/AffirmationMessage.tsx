import React from "react";
import Affirmation from "./Affirmation";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

//prop interface 
    //response to check-in data = string

const AffirmationMessage = () => {
    const location = useLocation();
    const answer = location.state as any;
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    }

    const animation = ""

    return (
        <div>
            <Button variant="primary" onClick={goBackHome}>back</Button>
            <div className="animation">{animation}</div>
            <Affirmation response={answer} />
            {/* <h3>message test</h3> */}
        </div>
    );
}

export default AffirmationMessage;