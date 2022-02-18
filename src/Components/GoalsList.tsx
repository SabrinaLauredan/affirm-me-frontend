import GoalCard from "../Components/GoalCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import GoalCardView from "./GoalCardView";
import IGoalData from "../types/Goal";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";



// Home
// GoalsList
// Center on page 


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
            <h1>My Goals</h1>
        <ListGroup variant="flush">
            <ListGroup.Item>
            {listedGoals.map((goal, index) => {
                    return <GoalCard goal={goal} key={index} setGoalDetail={setGoalDetail} ></GoalCard>
                })}
            </ListGroup.Item>
        </ListGroup>
                <div>
                </div>
            </div>}
    </div>
);
}







