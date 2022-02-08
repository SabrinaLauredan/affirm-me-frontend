import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// interface GoalCardProps = {
//     goal:any, 
//     setGoalDetail :func
// };


// const GoalCard: React.FC<{goal:any, setGoalDetail:Function}> = ({goal, setGoalDetail}) => { // Aisha'd changes
//     return (
//         <Card sx={{ maxWidth: 500 }}> /
//             <CardActionArea>
//                 <CardContent onClick={() => {setGoalDetail(goal)}}>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {goal.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {goal.description}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }; 


// export default GoalCard

// Aisha's changes end


export default function GoalCard() {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Goal Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Goal Description
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}; 
