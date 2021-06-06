import { useState, useEffect } from 'react' 

import {Container, Row, Col} from 'react-bootstrap'

import dataProducts from '../FakeData/Products'

import FormProduct from '../Components/Form/Product'

import CardProduct from '../Components/Card/CardProduct'

function Product() {

    const [dataAddProduct, setDataAddProduct] = useState();
    const [products, setProducts] = useState(dataProducts);

    useEffect(()=>{
        if(dataAddProduct){
            
            const newProducts = [
                ...products,
                dataAddProduct
            ]

            setProducts(newProducts);
        }
    },[dataAddProduct])

    return (
        <Container className="py-5">
            <Row className="mb-5 justify-content-center">
                <Col md="5">
                    <FormProduct setDataAddProduct={setDataAddProduct} />
                </Col>
            </Row>
            <Row>
                {products.map((product,index)=>(
                    <Col md="3" key={index}>
                        <CardProduct product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Product
