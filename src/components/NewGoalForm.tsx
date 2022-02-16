import React, { useState, MouseEvent } from "react";
import GoalDataService from "../services/GoalService";
import IGoalData from "../types/Goal";
// import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap"; 


const NewGoalForm = () => {
    // let [searchParams, setSearchParams] = useSearchParams(); 
    // let editId = searchParams.get("id");
    // if editID undefined, making goal, if found editing 
    // console.log(editId)
    // console.log(useSearchParams())
    const initialGoalState = {
        id: null,
        title: "",
        description: "",
        createdAt: undefined
    };

    // const submitDate = moment().format("DD-MM-YYYY hh:mm:ss")
    const navigate = useNavigate();

    const [goal, setGoal] = useState<IGoalData>(initialGoalState);
    // const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGoal({...goal, [name]: value });
    };

    const goBackHome = () => {
        navigate('/');
    }

    const saveGoal = (event: MouseEvent) => { 
        event.preventDefault();
        let data = {
            title: goal.title,
            description: goal.description,
            createdAt: undefined
        };

        console.log(data);
        // const req = GoalDataService.update(editId,data)
            // req.then((response: any) => {
        
        // conditional
        // also get current goals in edit form with state or get 
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
        <div>
            <Form>
                <Form.Group className="form-group" controlId="goalTitleInput" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="title"
                        // required 
                        value={goal.title} 
                        onChange={handleInputChange} 
                        name="title"
                    />
                </Form.Group>
                <Form.Group className="form-group" controlId="goalDescriptionInput">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        value={goal.description}
                        onChange={handleInputChange}
                        name="description" 
                    />
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={saveGoal}>Submit Goal</Button>
            </Form>
        </div>
    );
};

export default NewGoalForm;

