import React, { useState } from "react";
import moment from "moment";



// goal fields == 'title', 'description'
//


const NewGoalForm = ({ createGoal }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);
    const createdAt = moment().format("DD-MM-YYYY hh:mm:ss")

    const checkValidInput = (response: any) => {
        if (response === "" || response.length > 40) {
            setCanSubmit(false);
        } else {
            setCanSubmit(true);
        }
    };
    
    return (
        <form>
            <input 
                value={title} 
                placeholder="title" 
                onInput={(e) => { 
                    let target = e.target as HTMLInputElement;
                    setTitle(target.value);
                    checkValidInput(target.value)
                }}
            />
            <input 
                value={description} 
                placeholder="description" 
                onInput={(e) => { 
                    let target = e.target as HTMLInputElement;
                    setDescription(target.value);
                    checkValidInput(target.value)
                }}
            />
            <button 
                onClick={() => {
                    createGoal(`"title":${title}, "description":${description}, "createdAt":${createdAt})`);
                }}
                disabled={!canSubmit}
            >
                submit
            </button>
        </form>
    );
};



export default NewGoalForm;