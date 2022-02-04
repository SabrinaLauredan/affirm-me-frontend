import GoalCard from './GoalCard';
import * as React from "react";
// import axios from 'axios';
// import { useState, useEffect, useContext } from 'react';


export function GoalList() {
    return(
        <GoalCard />
    )
}


// interface Goal {
//     id: number;
//     title: string;
//     description: string;
//     createdAt: Date;
// }

// export function GoalsList() {
//     const GOAL = useContext(GoalCard);

//     const [listedGoals, setGoalList] = useState([]]);

//     // const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         axios.get<Goal>('https://affirm-me-backend.herokuapp.com/goals')
//             .then((response) => {
//             // console.log(response.data);
//             setGoalList([...response.data]); 
//             })
//             .catch((error) => {
//                 console.log('ERROR:', error.response.data);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>My Goals</h1>
//             {/* {errorMessage} */}
//             {listedGoals}
//             <div>
//             </div>
//         </div>
//     );
// }

// const createGoalList = (goals: any) => {
//     let goallist = goals.map((GoalCard: any) => {
//         return <GoalCard />
//     });
//     return goallist;
// };

// export function GoalList() {
//     return (
//         <GoalCard />
//     )
// }

// useEffect(() => {
//     axios
//         .get(`${process.env.REACT_APP_BACKEND_URL}/posts/all`)
//         .then((response) => {
//             setPosts(response.data);
//             setPostComponents(createPostsList(response.data));
//         });
// }, []);








// export function GoalsList() {
//     const [listedGoals, setGoalList] = useState('https://affirm-me-backend.herokuapp.com/goals');
//     // const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         axios.get<Goal>('https://affirm-me-backend.herokuapp.com/goals')
//             .then((response) => {
//             // console.log(response.data);
//             setGoalList([...response.data]); 
//             })
//             .catch((error) => {
//                 console.log('ERROR:', error.response.data);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>My Goals</h1>
//             {/* {errorMessage} */}
//             {listedGoals}
//             <div>
//             </div>
//         </div>
//     );
// }

