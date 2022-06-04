import React from 'react'
import { Container, Col, Table, Row } from 'react-bootstrap'
import Layout from '../src/components/layout/Layout'
import Meta from '../src/components/meta/Meta'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { BsX } from "react-icons/bs";
const cart = () => {
    const carts = useSelector((state) => state.carts)
    console.log('Carts: ', carts)
    return (
        <Layout>
            <Meta></Meta>
            <div className="cartPageContainer">
                <div className="pageSectionTitle">
                    <Container>
                        <Col md={12} sm={12} lg={12}>
                            <h2>Cart Items</h2>
                        </Col>
                    </Container>
                </div>
                <div className="cartTable">
                    <Container>
                        <Row>
                            <Col sm={12} md={9} lg={9}>
                                <Table border>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.carts?.map((cart) => (
                                                <tr key={cart._id}>
                                                    <td><Image src={cart.image2} width="80px" height="80px" alt={cart.name} /></td>
                                                    <td>{cart.name}</td>
                                                    <td>{cart.price}</td>
                                                    <td>{cart.qty}</td>
                                                    <td>{cart.qty * cart.price}</td>
                                                    <td><BsX /></td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={3} sm={12} lg={3}>
                                <h3>Cart Total</h3>
                                <table>
                                    <tr>
                                        <td>Hello</td>
                                        <td>Hello</td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default cart