import GoalCard from "./GoalCard";
import * as React from "react";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import GoalCardView from "./GoalCardView"




interface Goal {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
}

export function GoalsList() {
    // const GOAL = useContext(GoalCard);
    const [listedGoals, setGoalList] = useState([]);
    const [goalDetail, setGoalDetail] = useState();

    useEffect(() => {
        axios.get<Goal>('https://affirm-me-backend.herokuapp.com/goals')
            .then((response:any) => {
            //console.log(response.data);
            setGoalList(response.data.goals); 
            })
            .catch((error) => {
                console.log('ERROR:', error.response.data);
            });
    }, []);
    // GoalCardView
    return (
        <div>
            { goalDetail? <GoalCardView goalDetail={goalDetail} setGoalDetail={setGoalDetail} ></GoalCardView> : <div> 
                <h1>My Goals</h1>
                {/* {errorMessage} */}
                {listedGoals.map((goal, index)=> {
                    return <GoalCard goal={goal} key={index} setGoalDetail={setGoalDetail} ></GoalCard>
                })}
                <div>
                </div>
            </div>}
        </div>
    );
}







    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BACKEND_URL}/posts/all`)
    //         .then((response) => {
    //             setPosts(response.data);
    //             setPostComponents(createPostsList(response.data));
    //         });
    // }, []);
    // const [errorMessage, setErrorMessage] = useState('');

    // useEffect(() => {
    //     axios.get<Goal>('https://affirm-me-backend.herokuapp.com/goals')
    //         .then((response:any) => {
    //         //console.log(response.data);
    //         setGoalList(response.data.goals); 
    //         })
    //         .catch((error) => {
    //             console.log('ERROR:', error.response.data);
    //         });
    // }, []);
    // GoalCardView
//     return (
//         <div>
//             { goalDetail? <GoalCardView goalDetail={goalDetail} setGoalDetail={setGoalDetail} ></GoalCardView> : <div> 
//                 <h1>My Goals</h1>
//                 {/* {errorMessage} */}
//                 {listedGoals.map((goal, index)=> {
//                     // return <GoalCard key={index} ></GoalCard>
//                     return <GoalCard goal={goal} key={index} setGoalDetail={setGoalDetail} ></GoalCard>
//                 })}
//                 <div>
//                 </div>
//             </div>}
//         </div>
//             // return <div></div>
//     );
// }





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

