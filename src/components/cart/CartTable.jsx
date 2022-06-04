import React from 'react'
import { removeCart, cartDecrement, cartIncrement, resetCart } from '../../../hooks/redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { BsX } from "react-icons/bs";
import { BsPlus, BsDash } from "react-icons/bs";
import { Container, Col, Table, Row, Button } from 'react-bootstrap'
import styles from '../../../styles/Cart.module.css'
const CartTable = () => {
    const carts = useSelector((state) => state.carts)
    const dispatch = useDispatch()
    return (
        <>
            <div className="pageSectionTitle">
                <Container>
                    <Col md={12} sm={12} lg={12}>
                        <h2>Cart Items</h2>
                    </Col>
                </Container>
            </div>
            <div className={styles.cartTable}>
                <Container>
                    <Row>
                        <Col sm={12} md={9} lg={9}>
                            <Table bordered responsive className="text-center">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts.carts?.map((cart) => (
                                            <tr key={cart._id}>
                                                <td><Image src={cart.image2} width="80px" height="80px" alt={cart.name} /></td>
                                                <td>{cart.name}</td>
                                                <td>{cart.price}</td>
                                                <td style={{ width: '20%', alignItems: 'center' }}>
                                                    <ul className={styles.cartQtyList}>
                                                        <li onClick={() => dispatch(cartDecrement(cart))}><BsDash /></li>
                                                        <li><input type="text" value={cart.qty} /></li>
                                                        <li onClick={() => dispatch(cartIncrement(cart))}><BsPlus /></li>
                                                    </ul>
                                                </td>
                                                <td>{cart.qty * cart.price}</td>
                                                <td><BsX className={styles.removeCart} onClick={() => dispatch(removeCart(cart))} /></td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                            <Button onClick={() => dispatch(resetCart(carts))}>Clear Cart</Button>
                        </Col>
                        <Col md={3} sm={12} lg={3}>
                            <h3>Cart Total</h3>
                            <Table bordered responsive>
                                <tbody>
                                    <tr>
                                        <td>Sub Total: </td>
                                        <td>${carts.total}.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total: </td>
                                        <td>${carts.total}.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CartTable