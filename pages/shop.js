import React from 'react'
import Layout from '../src/components/layout/Layout'
import Meta from '../src/components/meta/Meta'
import styles from '../styles/Shop.module.css'
import PageHero from '../src/components/pageHeroSection/PageHero'
import Banner from '../src/components/banner/Banner'
import { Customer } from '../src/components/customer/Customer'
import ShopPage from '../src/components/products/ShopPage'
const Shop = () => {

    return (
        <Layout>
            <Meta></Meta>
            <div className={styles.shopPageMainContaner}>
                <PageHero></PageHero>
                <ShopPage></ShopPage>
                <Banner></Banner>
                <Customer></Customer>
            </div>
        </Layout>
    )
}

export default Shop