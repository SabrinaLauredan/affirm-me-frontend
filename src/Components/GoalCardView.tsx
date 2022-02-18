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
            <main> 
                <h2>Goal View</h2>
                {/* <Button onClick = {() => setGoalDetail(null)}>
                    back to home
                </Button> */}
                <Button onClick = {() => setGoalDetail(null)}>←</Button>
                <div className="goal-view-blocks">
                    <div>
                        <div className="goal-view-title">
                            <h3>{goalDetail.title}</h3>
                        </div>
                        <div className="goal-view-description">
                            <h4>{goalDetail.description}</h4>
                        </div>
                    </div>
                </div>
                <div>
                {/* <h1>CALENDAR DISPLAY</h1> */}
                <Calendar onChange={onChange} value ={value} />
                </div>
            </main>
            <CheckIn trigger={timedPopup} setTrigger={setTimedPopup} />
        </div>
    )
};

export default GoalCardView;