import React from "react";
import Affirmation from "./Affirmation";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, CloseButton, Figure} from "react-bootstrap";

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
            <div className="animation">{animation}
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    <Affirmation response={answer} />
                    {/* <h3>message test</h3> */}
                </Figure.Caption>
            </Figure>
            </div> 
        </div>
    );
}

export default AffirmationMessage;