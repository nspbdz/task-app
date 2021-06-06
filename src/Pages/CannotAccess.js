import ModalLogin from '../Components/Modal/ModalLogin'
import { Img,useContext,useState } from 'react'
import { Card,Col,Row,Button, Container } from 'react-bootstrap'

import { UserContext } from '../context/userContext'

function CannotAccess() {

    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }
    const [state, dispatch] = useContext(UserContext)
    const styledumb={
        width:"100%",
        height:"auto",
        backgroundColor:"black"
     }
    const styleCon={
          backgroundColor:"black",
            // maxWidth: "1024px",
            margin: "0 auto"
            
     }
     const styleMob={
        "@media screen and (max-width: 491px)": { /*mobile media query*/
            header:{
            width: "90%",
            },
            
            // nav{
            // width: 90%;
            // }
            
            content:{
            width: "90%"
            }
            
            // footer{
            // width: 90%;
            // }
            
            } /*close mobile screen media query*/
            
     }
  
    return (
        
        <Container style={styleCon} className="my-5">
        <Row >
        <Col sm={6}>
                    
                    <img variant="top" style={styledumb} src="dumbgram.svg" class="img-fluid" alt="Responsive image" />
                    <br>
                    </br>
                    
                    <h1 style={{color:"white"}} >Share your best photos or videos</h1>
                    <p>Join now,share your creations with another people and enjoy other creations</p>
                    {state.isLogin ? 
                            <Button onClick={handleLogout}  className="btn-sm py-0 bg-danger border-0">Logout</Button>
                              : 
                            <Button onClick={handleShow} className="btn-sm py-0 bg-secondary border-0">Login</Button>
                        } 
            <ModalLogin show={show} handleClose={handleClose} />
            <Button  className="btn-sm py-0 bg-danger border-0">Register</Button>
                        
                    </Col>
                
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g1.svg"  />
                    <Card.Img variant="top" src="g4.svg"  />
                    <Card.Img variant="top" src="g5.svg"  />
                     </Card>
                    </Col>
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g2.svg"  />
                    <Card.Img variant="top" src="g6.svg"  />
                     </Card>
                    </Col>
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g3.svg"  />
                    <Card.Img variant="top" src="g8.svg"  />
                    <Card.Img variant="top" src="g7.svg"  />
                     </Card>
                    </Col>

  </Row>

            

        </Container>
    )
}

export default CannotAccess
