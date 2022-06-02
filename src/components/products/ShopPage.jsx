import React from 'react'
import Products from '../../../public/products.json'
import SingleFilter from '../products/SingleFilter'
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Shop.module.css'
const ShopPage = () => {
    const fruitsCat = Products.filter((product) => product.cat === 'Fruits')
    const freshFruits = Products.filter((product) => product.cat === 'Fresh Fruits')
    const greenFruits = Products.filter((product) => product.cat === 'Green Fruits')
    return (
        <div className={styles.productFilterSection}>
            <Container>
                <Row>
                    <Col md={3} lg={3} sm={12}>
                        <div className={styles.filterLeftSide}>
                            <h3>This is Left Sidebar</h3>
                        </div>
                    </Col>
                    <Col md={9} sm={12} lg={9}>
                        <div className={styles.productFilterTap}>
                            <Tabs defaultActiveKey="Fruits" id="uncontrolled-tab-example" className="mb-4">
                                <Tab eventKey="Fruits" title="Fruits">
                                    <Row>
                                        {
                                            fruitsCat?.map((product) => <SingleFilter key={product._id} product={product}></SingleFilter>)
                                        }
                                    </Row>
                                </Tab>
                                <Tab eventKey="Fresh Fruits" title="Fresh Fruits">
                                    <Row>
                                        {
                                            freshFruits?.map((product) => <SingleFilter key={product._id} product={product}></SingleFilter>)
                                        }
                                    </Row>
                                </Tab>
                                <Tab eventKey="Green Fruits" title="Green Fruits">
                                    <Row>
                                        {
                                            greenFruits?.map((product) => <SingleFilter key={product._id} product={product}></SingleFilter>)
                                        }
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopPage