import * as React from 'react';
import { Button, Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom'



const GoalCard: React.FC<{ goal: any, setGoalDetail: Function }> = ({ goal, setGoalDetail }) => { // Aisha'd changes
    return (
        <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col>
                <Card className="text-center" border="info" style={{ width: '18rem' }}>
                    <Card.Header> Goal #{goal.id}</Card.Header>
                    <Card.Body>
                        <Card.Title as="h5">
                            {goal.title}
                        </Card.Title>``
                        <Card.Text>
                            {goal.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { setGoalDetail(goal) }}>Card Details</Button>
                        <Button variant="primary">Delete Goal</Button>
                        <button>
                            <Link to={`/goalform?id=${goal.id}`}  className="nav-link">Edit Goal</Link>
                        </button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Created on: {goal.createdAt}</Card.Footer>
                </Card>
            </Col>
            {/* ))} */}
        </Row>
    );
};


export default GoalCard;



