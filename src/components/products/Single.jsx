import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../../../styles/Product.module.css"
import { Button, Col } from 'react-bootstrap';
import { BsEye, BsLink } from "react-icons/bs";
import ProductModal from '../modal/ProductModal';
const Single = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { image, image2, name, price } = product

    return (
        <>
            <Col md={11} sm={11} lg={11}>
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
                        <Button className={styles.addToCartBtn}>Add To Cart </Button>
                    </div>
                </div>
            </Col>
            <ProductModal product={product} open={show} close={handleClose}></ProductModal>
        </>

    )
}

export default Single