import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const GoalCard: React.FC<{goal:any, setGoalDetail:Function}> = ({goal, setGoalDetail}) => { 
    return (
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
        </Card>
    );
}; 


export default GoalCard

