import React from 'react'
import Image from 'next/image'
import imgShop from '../../../public/images/shop_hero_bg.png'
import { Container } from 'react-bootstrap'
import styles from '../../../styles/PageHeroSection.module.css'
const PageHero = () => {
    return (
        <div className={styles.pageHeroSection}>
            <Container>
                <div className={styles.pageHeroArea}>
                    <Image src={imgShop} alt="" width="1275px" height="300px" />
                    <div className={styles.pageHeroText}>
                        <h5>Buy 1 Get 1</h5>
                        <h3>Up to 30% Discount on Selected Items</h3>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PageHero