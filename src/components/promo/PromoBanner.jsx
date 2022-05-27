import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsArrowRightShort } from "react-icons/bs";
import Image from 'next/image'
import img1 from '../../../public/images/banner/promoBannerbg_1.png'
import img2 from '../../../public/images/banner/promoBannerbg_2.png'
import img3 from '../../../public/images/banner/promoBannerbg_3.png'
import styles from '../../../styles/Promo.module.css'
const PromoBanner = () => {
    return (
        <div className={styles.promoBannerSectionArea}>
            <Container>
                <Row>
                    <Col md={4} lg={4} sm={12}>
                        <div className={styles.singlePromoBannerOne}>
                            <div className={styles.promoBannerText}>
                                <h2>Fresh Fruits Collection</h2>
                                <a href="#" className={styles.promoBtn}><BsArrowRightShort /></a>
                            </div>
                            <Image src={img1} alt="" width="300px" height="320px" />
                        </div>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                        <div className={styles.singlePromoBannerTwo}>
                            <div className={styles.promoBannerText}>
                                <h2>Fresh Fruits Collection</h2>
                                <a href="#" className={styles.promoBtn}><BsArrowRightShort /></a>
                            </div>
                            <Image src={img2} alt="" width="300px" height="320px" />
                        </div>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                        <div className={styles.singlePromoBannerThree}>
                            <div className={styles.promoBannerText}>
                                <h2>Fresh Fruits Collection</h2>
                                <a href="#" className={styles.promoBtn}><BsArrowRightShort /></a>
                            </div>
                            <Image src={img3} alt="" width="300px" height="320px" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PromoBanner