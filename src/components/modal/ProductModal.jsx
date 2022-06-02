import React from 'react'
import Image from 'next/image'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import styles from '../../../styles/Modal.module.css'
import { BsPlus, BsDash } from "react-icons/bs";
const ProductModal = ({ product, open, close }) => {
    console.log('Product: ', product)
    const { image, image2, name, price, stock } = product
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
                            <h5 className={styles.price}>${price}.00</h5>
                            <p>{stock} Products sold in last 12 hours</p>
                            <p style={{ textAlign: 'justify' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className={styles.cartProductInfo}>
                                <p>Quantity</p>
                                <div className={styles.cartQuantity}>
                                    <ul className={styles.cartQtyList}>
                                        <li><BsDash /></li>
                                        <li>1</li>
                                        <li><BsPlus /></li>
                                    </ul>
                                </div>
                                <p>Only !0 Item Left!</p>
                            </div>
                            <Button className={styles.addToCartBtn}>Add To Cart</Button>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal >
    )
}

export default ProductModal