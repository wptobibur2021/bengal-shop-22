import Image from "next/image"
import React from "react"
import styles from "../../../styles/Header.module.css"
import { Container, Row, Col, Navbar, Button, NavDropdown, Nav } from "react-bootstrap"
import { BsHeart, BsCart, BsPerson, BsSearch } from "react-icons/bs";
import logo from "../../../public/images/logo.png"
const Header = () => {
    return (
        <header className={styles.headerArea}>
            <div className={styles.headerTopArea}>
                <Container>
                    <Row>
                        <Col md={3} lg={3} sm={12}>
                            <div className={styles.logoArea}>
                                <Image className={styles.logo} src={logo} width="30px" height="30px" alt="Picture of the author" />
                                <h2>Bengal Shop</h2>
                            </div>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                            <div className={styles.searchArea}>
                                <BsSearch className={styles.searchIcon} />
                                <input type="text" className={styles.searchText} placeholder="Search Product" />
                                <Button className={styles.searchBtn} type="submit">Search</Button>
                            </div>
                        </Col>
                        <Col md={3} lg={3} sm={12}>
                            <div className={styles.headerRight}>
                                <BsHeart />
                                <BsCart />
                                <div className={styles.userIcon} >
                                    <BsPerson />
                                </div>
                                <h6>Account</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.menuArea}>
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="All Categories" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Shop</Nav.Link>
                                <Nav.Link href="#link">Pages</Nav.Link>
                                <Nav.Link href="#link">Pages</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header >
    )
}

export default Header