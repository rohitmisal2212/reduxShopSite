import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice'


const Cart = () => {
    const productDetails = useSelector(state => (state.cart))
    const dispatch = useDispatch()

    const removeFromCart = (product) => {
        dispatch(remove(product))
    }
    return (
        <>
            <div className="row" >
                {productDetails.map(element => (
                    <div className="col-md-4">
                        <Card key={element.id} style={{ margin: "30px" }}>
                            <Card.Img variant="top" src={element.image} height={"190px"} width={"150px"} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    INR.-  {element.price}
                                </Card.Text>
                                <Button variant="danger" onClick={() => { removeFromCart(element.id) }}>Remove Item</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart
