import Image from 'next/image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../../../../public/images/logo.png"
const Header = () => {
    return (
        <Container>
            <Row>
                <Col md={4} sm={12} lg={4}>
                    <Image className="logo" src={logo} width="200px" height="40px" alt="Picture of the author" />
                </Col>
                <Col md={8} sm={12} lg={8}>
                    <h1>This is menu sections</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header