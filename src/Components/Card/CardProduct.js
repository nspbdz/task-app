import {Card,Button} from 'react-bootstrap'

function CardProduct({product}) {
    return (
        <Card>
            <Card.Img style={{height: '250px'}} variant="top" src={product?.url} />
            <Card.Body>
                <Card.Title>{product?.name}</Card.Title>
                <Card.Text>{product?.desc}</Card.Text>
                <Button variant="primary" className="btn-sm">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardProduct
