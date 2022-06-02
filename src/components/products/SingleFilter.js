import React from 'react'
import { Button } from 'react-bootstrap';
import { BsEye, BsLink } from "react-icons/bs";
import Image from 'next/image';
import { Col } from 'react-bootstrap'
import styles from "../../../styles/Product.module.css"
const SingleFilter = ({ product }) => {
    const { image, name, price } = product
    return (
        <Col md={4} lg={4} sm={12}>
            <div className={styles.productItem}>
                <div className={styles.singleItem}>
                    <Image src={image} width="450px" height="450px" layout="responsive" alt="logo" />
                    <div className={styles.productHoverItem}>
                        <BsEye className={styles.productIcon} />
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
    )
}

export default SingleFilter