import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
// import { getGoals} from "./api";

const GoalCardView: React.FC<{goalDetail:any, setGoalDetail:Function}> = ({goalDetail, setGoalDetail}) => {
    const [value, onChange] = useState(new Date());

    return  (
        <div className="goal-view">
            <h2>Goal View</h2>
            <button onClick = {() => setGoalDetail(null)}>
                back to home
            </button>
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
        </div>
    )
};

export default GoalCardView;