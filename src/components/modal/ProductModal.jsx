import React, { useState } from 'react'
import Image from 'next/image'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import styles from '../../../styles/Modal.module.css'
import { BsPlus, BsDash } from "react-icons/bs";
import { addCarts } from '../../../hooks/redux/cartSlice'
import { useDispatch } from 'react-redux';
import useNotify from '../../../hooks/notification/useNotify'
const ProductModal = ({ product, open, close }) => {
    const { image, image2, name, price, stock } = product
    const [qty, setQty] = useState(1)
    const [itemPrice, setItemPrice] = useState(price)
    const dispatch = useDispatch()
    const { errorMessage, successMessage } = useNotify()
    // Quantity ncrement declaration function below
    const qtyPlus = () => {
        if (qty < stock) {
            setQty(Number(qty) + 1)
        } else {
            errorMessage(`Product outof stock now`);
        }
    }
    // Product quantity decrement declaration function below
    const qtyMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        } else {
            errorMessage(`Please increment your product quantity`)
        }
    }
    // Add to cart function declaration below
    const addToCart = () => {
        dispatch(addCarts({ ...product, qty, price }))
        close()
    }
    return (
        <Modal
            size="lg"
            show={open}
            onHide={close}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <Image src={image2} alt="" width="450px" height="400px" />
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className={styles.productInfo}>
                            <h4 style={{ marginBottom: '10px' }}>{name}</h4>
                            <h5 className={styles.price}>${price * qty}.00</h5>
                            <p>{stock} Products sold in last 12 hours</p>
                            <p style={{ textAlign: 'justify' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className={styles.cartProductInfo}>
                                <p>Quantity</p>
                                <div className={styles.cartQuantity}>
                                    <ul className={styles.cartQtyList}>
                                        <li onClick={qtyMinus}><BsDash /></li>
                                        <li><input onChange={() => qtyChange(setQty(e.trigger.value))} type="text" value={qty} /></li>
                                        <li onClick={qtyPlus}><BsPlus /></li>
                                    </ul>
                                </div>
                                <p>Only {stock - qty} Item Left!</p>
                            </div>
                            <Button onClick={addToCart} className={styles.addToCartBtn}>Add To Cart</Button>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal >
    )
}

export default ProductModal