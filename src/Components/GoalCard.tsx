import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
}