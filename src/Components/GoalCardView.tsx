import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import CheckIn from './CheckIn'

// import { getGoals} from "./api";

const GoalCardView: React.FC<{goalDetail:any, setGoalDetail:Function}> = ({goalDetail, setGoalDetail}) => {
    const [value, onChange] = useState(new Date());
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000);
    }, []);

    return  (
        <div className="d-flex justify-content-center align-content-center">
            <div className="d-grid gap-3"> 
                {/* <h2>Goal View</h2> */}
                {/* <Button onClick = {() => setGoalDetail(null)}>
                    back to home
                </Button> */}
                <div className="p-2">
                <Button onClick = {() => setGoalDetail(null)}>←</Button>
                </div>
                <div className="p-2">
                    <div>
                        <div className="text-center">
                            <h3>{goalDetail.title}</h3>
                        </div>
                        <div className="text-center">
                            <p>{goalDetail.description}</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 mx-auto">
                {/* <h1>CALENDAR DISPLAY</h1> */}
                <Calendar onChange={onChange} value ={value} />
                </div>
            </div>
            <CheckIn trigger={timedPopup} setTrigger={setTimedPopup} />
        </div>
    )
};

export default GoalCardView;