import React, { useState, useEffect } from "react";
import GoalDataService from "../services/GoalService";
import IGoalData from "../types/Goal";
import { Link } from "react-router-dom";
import GoalCard from "./GoalCard";

const GoalsListSabrina: React.FC = () => {
    const [listedGoals, setGoals] = useState<Array<IGoalData>>([]);
    const [currentGoal, setCurrentGoal] = useState<IGoalData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    useEffect(() => {
        retrieveGoals();
    }, []);

    const retrieveGoals = () => {
        GoalDataService.getAll()
            .then((response: any) => {
                setGoals(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const setActiveGoal = (goal: IGoalData, index: number) => {
        setCurrentGoal(goal);
        setCurrentIndex(index);
    };

    return (
        <div className="list row" >
            <div className="col-md-6" >
                <h4>Goals List</h4>
                <ul className="list-group">
                {listedGoals.map((goal, index)=> {
                    return <GoalCard goal={goal} key={index} setGoalDetail={setCurrentGoal} ></GoalCard>
                })}
                    {/* {listedGoals &&
                        listedGoals.map((goal, index) => (
                            <li 
                                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                onClick={() => setActiveGoal(goal, index)}
                                key={index}
                            >
                                {goal.title}
                            </li>
                        ))} */}
                </ul>
            </div>
            <div className="col-md-6" >
                {currentGoal ? (
                    <div>
                        <h4>Goal</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentGoal.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentGoal.description}
                        </div>
                        <Link to={"/goals/" + currentGoal.id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Goal...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoalsListSabrina;






// import React, { useState, useEffect } from "react";
// // import React, { useState, useEffect, ChangeEvent } from "react";
// import GoalDataService from "../services/GoalService";
// import IGoalData from "../types/Goal";
// import { Link } from "react-router-dom";
// import GoalCard from "./GoalCard";

// const GoalsListSabrina: React.FC = () => {
//     const [listedGoals, setGoals] = useState<Array<IGoalData>>([]);
//     const [currentGoal, setCurrentGoal] = useState<IGoalData | null>(null);
//     const [currentIndex, setCurrentIndex] = useState<number>(-1);
//     // const [searchTitle, setSearchTitle] = useState<string>("");

//     useEffect(() => {
//         retrieveGoals();
//     }, []);

//     // const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
//     //     const searchTitle = e.target.value;
//     //     setSearchTitle(searchTitle);
//     // };

//     const retrieveGoals = () => {
//         GoalDataService.getAll()
//             .then((response: any) => {
//                 setGoals(response.data);
//                 console.log(response.data);
//             })
//             .catch((e: Error) => {
//                 console.log(e);
//             });
//     };

//     // const refreshList = () => {
//     //     retrieveGoals();
//     //     setCurrentGoal(null);
//     //     setCurrentIndex(-1);
//     // };

//     const setActiveGoal = (goal: IGoalData, index: number) => {
//         setCurrentGoal(goal);
//         setCurrentIndex(index);
//     };

//     // const removeSelectedGoal = () => {
//     //     // GoalDataService.remove(`/goals/${currentGoal}`)
//     //     GoalDataService.remove(currentGoal)
//     //         .then((response: any) => {
//     //             console.log(response.data);
//     //             refreshList();
//     //         })
//     //         .catch((e: Error) => {
//     //             console.log(e);
//     //         });
//     // };
//     // const findByTitle = () => {
//     //     GoalDataService.findByTitle(searchTitle)
//     //         .then((response: any) => {
//     //             setGoals(response.data);
//     //             setCurrentGoal(null);
//     //             setCurrentIndex(-1);
//     //             console.log(response.data);
//     //         })
//     //         .catch((e: Error) => {
//     //             console.log(e);
//     //         });
//     // };

//     return (
//         <div className="list row" >
//             {/* <div className="col-md-8">
//                 <div className="input-group mb-3" >
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search by title"
//                         value={searchTitle}
//                         onChange={onChangeSearchTitle}
//                     />
//                     <div className="input-group-append" >
//                         <button
//                             className="btn btn-outline-secondary"
//                             type="button"
//                             onClick={findByTitle}
//                         >
//                         Search
//                         </button>
//                     </div>
//                 </div>
//             </div> */}
//             <div className="col-md-6" >
//                 <h4>Goals List</h4>
//                 <ul className="list-group">
//                 {listedGoals.map((goal, index)=> {
//                     return <GoalCard goal={goal} key={index} setGoalDetail={setCurrentGoal} ></GoalCard>
//                 })}
//                     {listedGoals &&
//                         listedGoals.map((goal, index) => (
//                             <li 
//                                 className={"list-group-item " + (index === currentIndex ? "active" : "")}
//                                 onClick={() => setActiveGoal(goal, index)}
//                                 key={index}
//                             >
//                                 {goal.title}
//                             </li>
//                         ))}
//                 </ul>
//                 {/* <ul className="list-group">
//                     {goals &&
//                         goals.map((goal, index) => (
//                             <li
//                                 className={
//                                     "list-group-item " + (index === currentIndex ? "active" : "")
//                                 }
//                                 onClick={() => setActiveGoal(goal, index)}
//                                 key={index}
//                             >
//                                 {goal.title}
//                             </li>
//                         ))}
//                 </ul> */}
//                 {/* <button
//                     className="m-3 btn btn-sm btn-danger"
//                     onClick={removeSelectedGoal}
//                 >
//                     Remove Selected Goal
//                 </button> */}
//             </div>
//             <div className="col-md-6" >
//                 {currentGoal ? (
//                     <div>
//                         <h4>Goal</h4>
//                         <div>
//                             <label>
//                                 <strong>Title:</strong>
//                             </label>{" "}
//                             {currentGoal.title}
//                         </div>
//                         <div>
//                             <label>
//                                 <strong>Description:</strong>
//                             </label>{" "}
//                             {currentGoal.description}
//                         </div>
//                         {/* <div>
//                             <label>
//                                 <strong>Status:</strong>
//                             </label>{" "}
//                             {currentGoal.createdAt ? "CreatedAt" : "Pending"}
//                         </div> */}

//                         <Link to={"/goals/" + currentGoal.id}
//                             className="badge badge-warning"
//                         >
//                             Edit
//                         </Link>
//                     </div>
//                 ) : (
//                     <div>
//                         <br />
//                         <p>Please click on a Goal...</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default GoalsListSabrina;
