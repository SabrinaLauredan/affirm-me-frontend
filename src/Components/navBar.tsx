// import IGoalData from "../types/Goal";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";


export default function NavBar() {
    return (
        <div>
            <Navbar fixed="top" bg="light" expand={false}>
                <Container>
                    <Navbar.Brand href="#">affirm.me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">affirm.me</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">home</Nav.Link>
                                <NavDropdown title="my goals" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="/goalform">add</NavDropdown.Item>
                                    <NavDropdown.Item href="/goals">view</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about">about</Nav.Link>
                                <Nav.Link href="/about">settings</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}











