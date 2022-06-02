import React from "react"
import Slider from "react-slick";
import { Container } from "react-bootstrap"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import styles from "../../../styles/Category.module.css"
import carousel from "../../../public/carousel.json"
const Category = () => {
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <BsArrowRightShort />,
        prevArrow: <BsArrowLeftShort />,
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
        <div className={styles.categoryCarouselArea}>
            <Container>
                <div className={styles.sectionTitleArea}>
                    <h2>Search by Category</h2>
                </div>
                <div className={styles.categoryCarousel}>
                    <Slider {...settings}>
                        {
                            carousel?.map((slide, i) => (
                                <div key={i} className={styles.categoryItem}>
                                    <div className={styles.sliderItem}>
                                        <Image src={slide.img} className={styles.sliderImg} alt={slide.name} width="64" height="64" />
                                        <p>{slide.name}</p>
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

export default Category