import React from "react";
import '../styles/CheckIn.css';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
interface IProps {
    trigger: boolean,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const CheckIn = (props: IProps) => {

    const handleClose = () => props.setTrigger(false);
    return (
        <Modal show={props.trigger} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Checking in!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Did you meet your goal today?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success">
                    <Link to="/affirmation" className="yes" state={'yes'} >Yes</Link>
                </Button>
                <Button variant="outline-warning">
                    <Link to="/affirmation" className="no" state={'no'}>No</Link>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CheckIn;



