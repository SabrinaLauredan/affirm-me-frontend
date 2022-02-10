import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import GoalDataService from "../services/GoalService";
//import Button from '@mui/material/Button';

// interface GoalCardProps = {
//     goal:any, 
//     setGoalDetail :func
// };


const GoalCard: React.FC<{goal:any, setGoalDetail:Function}> = ({goal, setGoalDetail}) => { // Aisha'd changes
    
    const deleteGoal = () => {

        let id = goal.id

        GoalDataService.remove(id)
        .then((response: any) => {
            console.log(response)
        })
        .catch((e: Error) => {
            console.log(e.message);
        });

    }   

    return (
        <div>
        <Card sx={{ maxWidth: 500 }}> /
            <CardActionArea>
                <CardContent onClick={() => {setGoalDetail(goal)}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {goal.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {goal.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={deleteGoal} className="btn btn-delete">delete</Button>   
            </CardActions>
        </Card>
        {/* <button onClick={deleteGoal} className="btn btn-delete">delete</button> */}
        </div>
    );
}; 


export default GoalCard;

// Aisha's changes end


// export default function GoalCard() {
//     return (
//         <Card sx={{ maxWidth: 500 }}>
//             <CardActionArea>
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         Goal Title
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         Goal Description
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }; 
