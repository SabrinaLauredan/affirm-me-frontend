import * as React from 'react';
// import {Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import GoalDataService from "../services/GoalService";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const GoalCard: React.FC<{ goal: any, setGoalDetail: Function }> = ({ goal, setGoalDetail }) => { 
    const deleteGoal = () => {

        let id = goal.id

        GoalDataService.remove(id)
            .then((response: any) => {
                console.log(response)


            })
            .catch((e: Error) => {
                console.log(e.message)
            });

    }

    return (
        <div>
            <Card variant="outlined" sx={{  maxWidth: 400 }}>
                <CardActionArea onClick={() => { setGoalDetail(goal) }}>
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h4" component="div">
                            {goal.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            {goal.description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>
                        <Link to={`/goalform?id=${goal.id}`} className="nav-link">Edit Goal</Link>
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteGoal}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Share
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}



export default GoalCard;



