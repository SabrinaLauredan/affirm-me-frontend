// import { any } from "prop-types";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, Link} from 'react-router-dom';
// import { RouteComponentProps } from 'react-router-dom';
import GoalDataService from "../services/GoalService";
import IGoalData from "../types/Goal";


// interface RouterProps { // type for `match.params`
//     id: string; // must be type `string` since value comes from the URL
// }

// type Props = RouteComponentProps<RouterProps>;

// type params = { id: string | undefined; };

// const Goal: React.FC<Props> = (props: Props) => {

const Goal: React.FC = () => {

    const initialGoalState = {
        id: null,
        title: "",
        description: "",
        createdAt: false  
    };

    const [currentGoal, setCurrentGoal] = useState<IGoalData>(initialGoalState);
    const [message, setMessage] = useState<string>("");

    const getGoal = (id: string | any | null) => {
        GoalDataService.get(id)
            .then((response: any) => {
                setCurrentGoal(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    // useEffect(() => {
    //     getGoal(props.match.params.id);
    // }, [props.match.params.id]);

    const params = useParams();
    // const goBackHome = () => {
    //     navigate('/');
    // }

    useEffect(() => {
        getGoal(`${params}`);
    }, [params]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentGoal({ ...currentGoal, [name]: value });
    };

    const updateCreatedAtToReflectCompleted = (status: boolean) => {
        var data = {
            id: currentGoal.id,
            title: currentGoal.title,
            description: currentGoal.description,
            createdAt: currentGoal.createdAt
        };
        GoalDataService.update(currentGoal.id, data)
            .then((response: any) => {
                console.log(response.data);
                setCurrentGoal({ ...currentGoal, createdAt: status });
                setMessage("The goal was completed successfully!");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const updateGoal = () => {
        GoalDataService.update(currentGoal.id, currentGoal)
            .then((response: any) => {
                console.log(response.data);
                setMessage("The goal was updated successfully!");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const deleteGoal = () => {
        GoalDataService.remove(currentGoal.id)
            .then((response: any) => {
                console.log(response.data);
                // props.history.push("/goals");
                <Link to="/goals"/>
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    return (
        <div>
            {currentGoal ? (
                <div className="edit-form">
                    <h4>Goal(component)</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentGoal.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentGoal.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>
                            {currentGoal.createdAt? "Completed" : "Pending"}
                        </div>
                    </form>
                    {currentGoal.createdAt ? (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updateCreatedAtToReflectCompleted(false)}
                        >
                        IN PROGRESS
                        </button>
                    ) : (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updateCreatedAtToReflectCompleted(true)}
                        >
                            Complete
                        </button>
                    )}
                    <button className="badge badge-danger mr-2" onClick={deleteGoal}>
                        Delete
                    </button>
                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateGoal}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Goal...</p>
                </div>
            )}
        </div>
    );
};
export default Goal;