import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//prop interface:
    //prop.response =  string ('yes' or 'no')

interface IProps {
    response: any;
}
const Affirmation = (props: IProps) => {

    // set state to track 'affirmation type' ('yes' or 'no')
    const [type, setType] = useState(false)
    //set Counter state to 0 
    const [counter, setCounter] = useState(0)

    //define array of 'yes' messages
    const yesMessages = [
        "Yay! Good job!!",
        "Woooo!",
        "Wow, you're amazing !!"
    ]
    //define array of 'no' messages
    const noMessages = [
        "No worries, you'll get 'em tomorrow!!",
        "Don't worry failures, worry about the chances you miss when you don't even try",
        "I'm proud of you for trying!"
    ]

    const incrementCounter = () => {
        if (counter == 3) {
            setCounter(0)
        } else {
            setCounter(counter + 1);
        }
    }

    // add a conditional that checks if prop.response == 'yes' and if it is sets Type to True 
    if (props.response == 'yes') {
        setType(true);
    }

    //define a message that is a ternary that displays 'yes'[counter] or 'no'[counter]
    //messages based on the state of type
    const message = type ? yesMessages[counter] : noMessages[counter];
    incrementCounter();

    return (
        <div className="message">
            {message}
        </div>
    );
};

export default Affirmation;

{/* <div className="message">
    {message}
</div>  */}