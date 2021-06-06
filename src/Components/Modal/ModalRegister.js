import {useState, useContext} from 'react'

import { Modal, Button, Form, Alert } from 'react-bootstrap'

import { UserContext } from '../../context/userContext'

import userData from '../../FakeData/User'

function ModalRegister(props) {
    const { showReg, handleCloseReg } = props;

    const [message, setMessage] = useState('')
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const [state, dispatch] = useContext(UserContext)

    const {username,password} = data

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()

        let dataLogin = false

        dataLogin = userData.find(
            (user) => user.username === username
        )

        if(dataLogin){
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: dataLogin
            })
            setMessage('')
            handleCloseReg()
        }else{
            setMessage('Email tidak ditemukan')
        }

        setData({
            username: '',
            password: ''
        })
    }

    return (
        <>
            <Modal  showReg={showReg} onHide={handleCloseReg}>

                <Modal.Header style={styleLog}>
                <Modal.Title > <h1 style={{color:"white"}}>Login</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body style={styleLog}>

                <Form onSubmit={handleOnSubmit}>
                    { message &&
                        <Alert variant="danger" className="py-1">
                            {message}
                        </Alert>
                    }
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control required onChange={handleOnChange} name="username" value={username} type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDesc">
                        <Form.Control required onChange={handleOnChange} name="password" value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2"> 
                    <Button size="lg" variant="primary" type="submit">
                        Login
                    </Button>
                    </div>
                </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}
const styleLog={
    backgroundColor:"black"
}
export default ModalRegister
