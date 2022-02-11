import React, { useState, ChangeEvent } from "react";
import GoalDataService from "../services/GoalService";
import IGoalData from "../types/Goal";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const NewGoalForm = () => {
    const initialGoalState = {
        id: null,
        title: "",
        description: "",
        createdAt: ""
    };
    const submitDate = moment().format("DD-MM-YYYY hh:mm:ss")
    const navigate = useNavigate();

    const [goal, setGoal] = useState<IGoalData>(initialGoalState);
    // const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGoal({...goal, [name]: value });
    };

    const goBackHome = () => {
        navigate('/');
    }

    const saveGoal = () => {
        let data = {
            title: goal.title,
            description: goal.description,
            createdAt: submitDate
        };

        GoalDataService.create(data)
            .then((response: any) => {
                setGoal({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    createdAt: response.data.createdAt
                });
                // setSubmitted(true);
                console.log(response.data);
                goBackHome();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };


    return (
        <div className="submit-form">
            <div>
                <h4>ADD A GOAL</h4>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={goal.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        // required
                        value={goal.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </div>
                <button onClick={saveGoal} className="btn btn-success">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NewGoalForm;

//ORIGINAL WORKING CODE W SUBMISSION STATE

// const newGoal = () => {
//     setGoal(initialGoalState);
//     setSubmitted(false);
// };

// return (
//     <div className="submit-form">
//         {submitted ? (
//             <div>
//                 <h4>successful submission</h4>
//                 <button className="btn btn-success" onClick={newGoal}>
//                     add another goal
//                 </button>
//             </div> 
//         ) : (
//             <div>
//                 <h4>ADD A GOAL</h4>
//                 <div className="form-group">
//                     <label htmlFor="title">Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="title"
//                         required
//                         value={goal.title}
//                         onChange={handleInputChange}
//                         name="title"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="description"
//                         // required
//                         value={goal.description}
//                         onChange={handleInputChange}
//                         name="description"
//                     />
//                 </div>
//                 <button onClick={saveGoal} className="btn btn-success">
//                     Submit
//                 </button>
//             </div>
//         )}
//     </div>
// );






// interface IProps {
//     addGoal: (arg: {title: string; description?: string | undefined; createdAt?: string | undefined}) => void
// }

// const NewGoalForm = (addGoal: IProps["addGoal"]) => {
//     const submitDate = moment().format("DD-MM-YYYY hh:mm:ss")

//     const [requestBody, setRequestBody] = useState({
//         title: "",
//         description: "",
//         createdAt: submitDate
//     })
//     // https://www.bezkoder.com/react-typescript-api-call/
//     const [submitted, setSubmitted] = useState<boolean>(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//         setRequestBody({
//             ...requestBody,
//             [`${e.target.name}`]: `${e.target.value}`,
//         })
//     }

//     const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
//         //prevents page from reloading
//         e.preventDefault();

//         if(!requestBody.title){
//             return
//         }
//         //do something
//         addGoal(requestBody);
//         // setRequestBody({
//         //     ...requestBody,
//         //     createdAt: submitDate
//         // });
//     }
//     // const handleClick = () => {
//     //     if(
//     //         !requestBody.title
//     //     ) {
//     //         return
//     //     }
//     //     // setInput({
//     //     //     ...input,
//     //     //     createdAt: submitDate
//     //     // })
//     //     addGoal(requestBody);
//     // }

//     return (
//         <form onSubmit={submitForm}>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={requestBody.title}
//                 onChange={handleChange}
//                 name="title"
//             />
//             <input
//                 type="text"
//                 placeholder="Description"
//                 value={requestBody.description}
//                 onChange={handleChange}
//                 name="description"
//             />
//             <button
//                 type="submit"
//             >
//                 submit
//             </button>
//         </form>
//     )
// }

// export default NewGoalForm;