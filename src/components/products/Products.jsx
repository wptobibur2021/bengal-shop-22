import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import Product from "../../../public/products.json"
import styles from "../../../styles/Product.module.css"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Single from './Single';
const Products = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            Previous
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </button>
    );
    const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <BsArrowRightShort />,
        prevArrow: <BsArrowLeftShort />,
        className: 'productSlide',
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
        <div className={styles.productsAreaSection}>
            <Container>
                <div className={styles.sectionTitleArea}>
                    <h2>Deals of the Week</h2>
                </div>
                <div className={styles.productCarousel}></div>
                <Slider {...settings}>
                    {
                        Product?.map((product) => <Single key={product._id} product={product}></Single>)
                    }

                </Slider>
            </Container>
        </div>
    )
}

export default Products