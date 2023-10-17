import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';


const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const addToCart = (product) => {
        dispatch(add(product))
    }

    const productUpdate = async () => {
        try {
            const data = await fetch("https://fakestoreapi.com/products")
            const dataFinal = await data.json()
            setProducts(dataFinal)

        } catch (error) {
            console.log(error)
            document.write(error)
        }
    }

    useEffect(() => {
        productUpdate()
    }, [])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>
                    Product DashBord
                </h1>
            </div>
            <div className="row" >
                {products.map(element => (
                    <div className="col-md-3">
                        <Card key={element.id} style={{ margin: "30px" }}>
                            <Card.Img variant="top" src={element.image} height={"190px"} width={"150px"} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    INR.-  {element.price}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { addToCart(element) }}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Product


