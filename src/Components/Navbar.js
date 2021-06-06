import { useState, useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

import ModalLogin from './Modal/ModalLogin'

import { UserContext } from '../context/userContext'


function NavigasiBar() {
  
    const [state,dispatch] = useContext(UserContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="btn btn-light">Home</Link>
                        <Link to="/about" className="btn btn-light">About</Link>
                        <Link to="/product" className="btn btn-light">Product</Link>
                        <Link to="/profile" className="btn btn-light">Profile</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {state.isLogin ? 
                            <Button onClick={handleLogout} className="btn-sm py-0 bg-danger border-0">Logout</Button>
                        :
                            <Button onClick={handleShow} className="btn-sm py-0 bg-secondary border-0">Login</Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <ModalLogin show={show} handleClose={handleClose} />
        </>
    )
}

export default NavigasiBar
