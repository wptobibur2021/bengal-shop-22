import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "next/image";
import styles from '../../../styles/Banner.module.css'
import bannerImg1 from '../../../public/images/banner/Hero bg.png'
import bannerImg2 from '../../../public/images/banner/Hero bg_1.png'
const Banner = () => {
    return (
        <div className={styles.bannerArea}>
            <Container>
                <Row>
                    <Col md={6} sm={12} lg={6}>
                        <div className={styles.bannerItem}>
                            <Image src={bannerImg1} alt="logo" layout="responsive" width="600px" height="300px" />
                            <div className={styles.bannerText}>
                                <h5>Buy 1 Get 1</h5>
                                <h2>Fresh Fruits Collection</h2>
                                <Button className={styles.bannerBtn}>Order Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                        <div className={styles.bannerItem}>
                            <Image src={bannerImg2} alt="logo" layout="responsive" width="600px" height="300px" />
                            <div className={styles.bannerText}>
                                <h5>Buy 1 Get 1</h5>
                                <h2>Fresh Fruits Collection</h2>
                                <Button className={styles.bannerBtn}>Order Now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner