import GoalCard from "../Components/GoalCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import GoalCardView from "./GoalCardView";
import IGoalData from "../types/Goal";




export default function GoalsList() {
    const [listedGoals, setGoalList] = useState([]);
    const [goalDetail, setGoalDetail] = useState();
    useEffect(() => {
        axios.get<IGoalData>('https://affirm-me-backend.herokuapp.com/goals')
            .then((response: any) => {
                setGoalList(response.data.goals);
            })
            .catch((error) => {
                console.log('ERROR:', error.response.data);
            });

    }, []);

    console.log(listedGoals);

    return (
        <div>
        {goalDetail ?
            <GoalCardView goalDetail={goalDetail} setGoalDetail={setGoalDetail} ></GoalCardView>
            :
            <div>
<<<<<<< HEAD
            {/* <h1>My Goals</h1> */}
=======
        
>>>>>>> a16f8ebbe2443704339967110372fa38e019962c
            {listedGoals.map((goal, index) => {
                    return <GoalCard goal={goal} key={index} setGoalDetail={setGoalDetail} ></GoalCard>
                })}
                <div>
                </div>
            </div>}
    </div>
);
}







