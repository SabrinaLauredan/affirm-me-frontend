import * as React from "react";
// import { getGoals} from "./api";

const GoalCardView: React.FC<{goalDetail:any, setGoalDetail:Function}> = ({goalDetail, setGoalDetail}) => {

    // when goal is clicked, goal view should expand and 
    // show the goalview component on click 
    // takes 

    return  (
        <div className="goal-view">
            <h2>Goal View</h2>
            <button onClick = {() => setGoalDetail(null)}>
                close
            </button>
            <div className="goal-view-blocks">
                <div>
                    <div className="goal-view-title">
                        <h3>{goalDetail.title}</h3>
                    </div>
                    <div className="goal-view-description">
                        <h3>{goalDetail.description}</h3>
                    </div>
                </div>
            </div>

        </div>
    )



    // const { id } = useParams();
    // const post = getGoals(id);




    // return (
    //     <div>
    //         <h1>{post.title}</h1>
    //         <p>{post.content}</p>
    //return "goal card view"
};

export default GoalCardView;