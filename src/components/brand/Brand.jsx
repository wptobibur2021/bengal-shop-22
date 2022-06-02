import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from 'next/image'
import Brands from '../../../public/brands.json'
import styles from '../../../styles/Brand.module.css'
const Brand = () => {
    const settings = {
        infinite: false,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <BsArrowRightShort />,
        prevArrow: <BsArrowLeftShort />,
        className: 'brandSlide',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.brandSectionArea}>
            <Container>
                <div className={styles.sectionTitleArea}>
                    <h2>Popular Brands</h2>
                </div>
                <div className={styles.brandSlider}>
                    <Slider {...settings}>
                        {
                            Brands?.map((brand, i) => (
                                <div key={i} className={styles.brandItemArea}>
                                    <div className={styles.brandItem}>
                                        <Image src={brand.img} alt={brand.name} width="100px" height="75px" />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Brand