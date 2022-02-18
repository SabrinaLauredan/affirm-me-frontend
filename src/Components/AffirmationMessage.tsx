import React from "react";
import Affirmation from "./Affirmation";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, CloseButton, Figure} from "react-bootstrap";
import gif from '../assets/affirmation.gif';

const AffirmationMessage = () => {
    const location = useLocation();
    const answer = location.state as any;
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    }

    return (
        <div className="d-flex justify-content-center">
            <CloseButton aria-label="Hide" onClick={goBackHome} />
            <div className="affirmation">
                <img className="d-block mx-auto img-fluid w-25" src={gif} alt="affirmationanimation" />
                <h3 className="text-center">
                    <Affirmation response={answer} />
                </h3>
            </div> 
        </div>
    );
}

export default AffirmationMessage;