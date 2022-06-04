import React from 'react'
import { Col } from 'react-bootstrap'
import Link from "next/link"
const NoCart = () => {
    return (
        <Col sm={12} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="noCarts">
                <h6>No Cart Item Avilable, Please product add to cart, <Link href='/'>Click here</Link></h6>
            </div>
        </Col>
    )
}

export default NoCart