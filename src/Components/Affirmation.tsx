import React from "react";

//prop interface:
    //prop.response =  string ('yes' or 'no')

interface IProps {
    response: string;
}
const Affirmation = (props: IProps) => {

    // set state to track 'affirmation type' ('yes' or 'no')
    // const type = props.response

    //define function to pick a random num between 0 - 2
    const getRandomIndex = (num: number) => {
        return Math.floor(Math.random() * (num)); 
        //random num between 0 inclusive and num exclusive
        //getRandomIndex(3) returns either 0, 1, or 2
    }

    //define array of 'yes' messages
    const yesMessages = [
        "Yay! Good job!!",
        "Woooo!",
        "Wow, you're amazing !!"
    ];
    //define array of 'no' messages
    const noMessages = [
        "No worries, you'll get 'em tomorrow!!",
        "Don't worry about failures, worry about the chances you miss when you don't even try",
        "I'm proud of you for trying!"
    ];

    const randomIndex = getRandomIndex(yesMessages.length)

    //if else conditional that checks if 'answer' is 'yes' or 'no' 
    //and displays yesMessages[random] or noMessages[random] depending

    const chooseMessage = () => {
        if (props.response === 'yes') {
            return yesMessages[randomIndex];
        } else if (props.response === 'no') {
            return noMessages[randomIndex];
        } else {
            return 'error: response not read';
        }
    }

    const message = chooseMessage();

    console.log(randomIndex);

    return (
        <div className="message">
            {message}
        </div>
    );
};

export default Affirmation;

