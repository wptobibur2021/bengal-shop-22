import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import AppStore from '../../../public/images/app.png'
import Google from '../../../public/images/google.png'
import Payment from '../../../public/images/payment.png'
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={styles.footerAreaSection}>
            <div className={styles.footerTopArea}>
                <Container>
                    <Row>
                        <Col md={6} lg={6} sm={12}>
                            <div className={styles.footerWidgets}>
                                <Image src={logo} alt="name" width="200px" height="40px" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>
                                <div className={styles.mobileAppImg}>
                                    <Image src={AppStore} alt="phone" width="120px" height="40px" />
                                    <Image src={Google} alt="phone" width="120px" height="40px" />
                                </div>
                            </div>
                        </Col>
                        <Col md={3} lg={3} sm={12}>
                            <div className={styles.footerWidgets}>
                                <h2 className={styles.footerTitle}>About Us</h2>
                                <ul className={styles.footerMenu}>
                                    <li><a href="#">About Karte</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Category</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} lg={3} sm={12}>
                            <div className={styles.footerWidgets}>
                                <h2 className={styles.footerTitle}>About Us</h2>
                                <ul className={styles.footerMenu}>
                                    <li><a href="#">About Karte</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Category</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.footerBottom}>
                <Container>
                    <Row>
                        <Col md={3} sm={12} lg={3}>
                            <div className={styles.socialMediaArea}>
                                <ul className={styles.socialMedia}>
                                    <Link href="https://www.linkedin.com/in/tobibur"><a target="_blank"><li><FaLinkedinIn /></li></a></Link>
                                    <Link target="_blank" href="https://wa.me/+8801722527364"><a target="_blank"><li><FaWhatsapp /></li></a></Link>
                                    <Link target="_blank" href="https://github.com/wptobibur2021"><a target="_blank"><li><FaGithub /></li></a></Link>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} sm={12} lg={6}>
                            <div className={styles.copyRight}>
                                <p>&copy; 2022 Copyright All Right Reserved by Bengal Shop</p>
                            </div>
                        </Col>
                        <Col md={3} sm={12} lg={3}>
                            <div className={styles.paymentArea}>
                                <Image src={Payment} width="200px" height="20px" alt="Payment" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Footer