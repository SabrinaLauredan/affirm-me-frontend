import GoalCard from './GoalCard';
import * as React from "react";
import axios from 'axios';
import {  useState, useEffect } from 'react';


interface Goal {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
}


export function GoalList() {
    return (
        <GoalCard />
    )
}


export function GoalsList() {
    const [listedGoals, setGoalList] = useState('https://affirm-me-backend.herokuapp.com/goals');
    // const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get<Goal>('https://affirm-me-backend.herokuapp.com/goals')
            .then((response) => {
            console.log(response.data);
            setGoalList([...response.data]); 
            })
            .catch((error) => {
                console.log('ERROR:', error.response.data);
            });
    }, []);

    return (
        <div>
            <h1>My Goals</h1>
            {/* {errorMessage} */}
            {listedGoals}
            <div>
            </div>
        </div>
    );
}