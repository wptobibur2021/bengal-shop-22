import React from 'react'
import { Container, Col, Table, Row } from 'react-bootstrap'
import Layout from '../src/components/layout/Layout'
import Meta from '../src/components/meta/Meta'
import CartTable from '../src/components/cart/CartTable'
import { useSelector } from 'react-redux'
import NoCart from '../src/components/cart/NoCart'
import styles from '../styles/Cart.module.css'
const cart = () => {
    const carts = useSelector((state) => state.carts)
    return (
        <Layout>
            <Meta></Meta>
            <div className={styles.cartPageContainer}>
                {
                    carts.carts.length > 0 ? <CartTable></CartTable> : <NoCart></NoCart>
                }

            </div>
        </Layout>
    )
}

export default cart