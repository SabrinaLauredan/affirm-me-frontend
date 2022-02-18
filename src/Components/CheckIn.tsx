import React from "react";
import '../styles/CheckIn.css';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
interface IProps {
    trigger: boolean,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const CheckIn = (props: IProps) => {
    return (props.trigger) ? (
        <Modal.Dialog
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
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
                    <Button variant="secondary">
                        <Link to="/affirmation" className="yes" state={'yes'} >Yes</Link>
                    </Button>
                    <Button variant="primary">
                        <Link to="/affirmation" className="no" state={'no'}>No</Link>
                    </Button>
                </Modal.Footer>
        </Modal.Dialog>
    ) : <div></div>;
};

export default CheckIn;



