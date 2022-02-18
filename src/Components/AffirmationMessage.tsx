import React from "react";
import Affirmation from "./Affirmation";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, CloseButton, Figure} from "react-bootstrap";
import gif from '../assets/affirmation.gif';

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
            <CloseButton aria-label="Hide" onClick={goBackHome} />
            <div className="animation">
                <img width={250} height={200} src={gif} alt="affirmationanimation" />
                <h3 className="message">
                    <Affirmation response={answer} />
                </h3>
            {/* <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="affirmation gif"
                    src=""
                />
                <Figure.Caption>
                    <Affirmation response={answer} />
                </Figure.Caption>
            </Figure> */}
            </div> 
        </div>
    );
}

export default AffirmationMessage;