import React, { ReactNode } from "react";
import '../styles/CheckIn.css';
import { useNavigate, Link } from "react-router-dom";

interface IProps {
    trigger: boolean,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    // children: ReactNode;

}

const CheckIn = (props: IProps) => {
    // const navigate = useNavigate();

    //navigate to AffirmationMessage page
    // const goToMessage = () => {
    //     navigate('/affirmation');
    // }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    close
                </button>
                <h3>Did you meet your goal today?</h3>
                {/* onClick go to affirmation page and send respective data 'yes' or 'no' */}
                <Link to="/affirmation" className="yes" state={'yes'} >Yes</Link>
                <Link to="/affirmation" className="no" state={'no'}>No</Link>
                {/* <button className="no">No</button> */}
            </div>
        </div>
    ) : <div></div>;
}

export default CheckIn;