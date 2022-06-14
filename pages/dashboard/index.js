import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../src/components/backend/layout/Layout'

const Dashboard = () => {
    return (
        <Layout>
            <div className="">
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <h3>This is left sidebar</h3>
                        </Col>
                        <Col md={9} lg={9} sm={12}>
                            <h4>THis is right </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>

    )
}

export default Dashboard