import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { BsEye, BsLink } from "react-icons/bs";
import Image from 'next/image';
import { Col } from 'react-bootstrap'
import styles from "../../../styles/Product.module.css"
import ProductModal from '../modal/ProductModal';
import { useDispatch } from 'react-redux';
import { addCarts } from '../../../hooks/redux/cartSlice'
const SingleFilter = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { image, name, price } = product
    const qty = 1
    // Dispatch declation below
    const dispatch = useDispatch()
    // Add to cart function declaration below
    const addToCart = () => {
        dispatch(addCarts({ ...product, qty, price }))
    }
    return (
        <>
            <Col md={4} lg={4} sm={12}>
                <div className={styles.productItem}>
                    <div className={styles.singleItem}>
                        <Image src={image} width="450px" height="450px" layout="responsive" alt="logo" />
                        <div className={styles.productHoverItem}>
                            <BsEye onClick={handleShow} className={styles.productIcon} />
                            <BsLink className={styles.productIcon} />
                        </div>
                    </div>
                    <div className={styles.productText}>
                        <h6>{name}</h6>
                        <p>${price}.00</p>
                        <Button onClick={addToCart} className={styles.addToCartBtn}>Add To Cart </Button>
                    </div>
                </div>
            </Col>
            <ProductModal product={product} open={show} close={handleClose}></ProductModal>
        </>
    )
}

export default SingleFilter