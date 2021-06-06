import { Img,useContext } from 'react'
import { Card,Col,Row, Container,Table } from 'react-bootstrap'
import "../App.css";
import { UserContext } from '../context/userContext'

function Home() {

    const [state, dispatch] = useContext(UserContext)
    const styledumb={
       width:"100%",
       height:"auto",
       backgroundColor:"black"
    }
    const styleCon={
        backgroundColor:"black"
     }
     const styleProfile={
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
     }
    return (
        
        <Container style={styleCon} className="my-5">
        <Row>
                    <Col sm>
                    <img variant="top" style={styledumb} src="dumbgram.svg" class="img-fluid" alt="Responsive image" />
                    <img src="g1.svg" style={styleProfile}  class="rounded-circle" alt="Cinque Terre"></img> 
                    <br></br>
                    <h6 style={{textAlign:"center",color:"white"}}>nama</h6>
                    <p style={{textAlign:"center",color:"white"}}>@lalalisa_m</p>
                    
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Post </th>
                            <th>Folower</th>
                            <th>Folowing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>200</td>
                            <td>1,m</td>
                            <td>1</td>
                            </tr>
                            <tr>
                           
                            </tr>
                        </tbody>
                        </Table>

                    <br>
                    </br>
                    <h6>Rapper in black pink </h6>

                    
                   
                 
                    
                    </Col>
                
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g1.svg" />
                    <Card.Img variant="top" src="g4.svg" />
                    <Card.Img variant="top" src="g5.svg" />
                     </Card>
                    </Col>
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g2.svg" />
                    <Card.Img variant="top" src="g6.svg" />
                     </Card>
                    </Col>
                    <Col sm >
                    <Card className="shadow">
                    <Card.Img variant="top" src="g3.svg" />
                    <Card.Img variant="top" src="g8.svg" />
                    <Card.Img variant="top" src="g7.svg" />
                     </Card>
                    </Col>
  </Row>

            

        </Container>
    )
}

export default Home
