import React from 'react'
import Image from 'next/image';
import styles from "../../../styles/Product.module.css"
import { Button } from 'react-bootstrap';
import { BsEye, BsLink } from "react-icons/bs";
const Single = ({ product }) => {
    const { image, image2, name, price } = product
    console.log('product: ', product)
    return (
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
    )
}

export default Single