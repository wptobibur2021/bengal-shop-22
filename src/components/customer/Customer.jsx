import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Customer.module.css'

import img1 from '../../../public/images/support/img_1.png'
import img2 from '../../../public/images/support/img_2.png'
import img3 from '../../../public/images/support/img_3.png'
import img4 from '../../../public/images/support/img_4.png'
import Image from 'next/image'
export const Customer = () => {
    return (
        <div className={styles.customerSupportArea}>
            <Container>
                <Row>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.singleSupportArea}>
                            <div className={styles.supportImg}>
                                <Image src={img1} alt="Customer Name" width="80px" height="80px" />
                            </div>
                            <div className={styles.supportText}>
                                <h6>24 Customer Support</h6>
                                <p>Contact us 24 hours</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.singleSupportArea}>
                            <div className={styles.supportImg}>
                                <Image src={img2} alt="Customer Name" width="80px" height="80px" />
                            </div>
                            <div className={styles.supportText}>
                                <h6>Authentic Products</h6>
                                <p>Contact us 24 hours</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.singleSupportArea}>
                            <div className={styles.supportImg}>
                                <Image src={img3} alt="Customer Name" width="80px" height="80px" />
                            </div>
                            <div className={styles.supportText}>
                                <h6>Secure Payment</h6>
                                <p>Contact us 24 hours</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.singleSupportArea}>
                            <div className={styles.supportImg}>
                                <Image src={img4} alt="Customer Name" width="80px" height="80px" />
                            </div>
                            <div className={styles.supportText}>
                                <h6>Best Prices & Offers</h6>
                                <p>Contact us 24 hours</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
