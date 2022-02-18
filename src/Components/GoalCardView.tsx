import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import CheckIn from './CheckIn'
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';

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
        <div className="goal-view">
            <main> 
                <BackspaceSharpIcon>onClick = {() => setGoalDetail(null)}</BackspaceSharpIcon>
                <div className="goal-view-blocks">
                    <div>
                        <div className="goal-view-title">
                            <h3>{goalDetail.title}</h3>
                        </div>
                        <div className="goal-view-description">
                            <h3>{goalDetail.description}</h3>
                        </div>
                    </div>
                </div>
                <div>
                <h1>CALENDAR DISPLAY</h1>
                <Calendar onChange={onChange} value ={value} />
                </div>
            </main>
            <CheckIn trigger={timedPopup} setTrigger={setTimedPopup} />
        </div>
    )
};

export default GoalCardView;