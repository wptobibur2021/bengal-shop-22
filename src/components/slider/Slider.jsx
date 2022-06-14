import Image from "next/image"
import React from "react"
import { Carousel, } from "react-bootstrap"
import image1 from "../../../public/images/slider/slider_01.jpg"
import image2 from "../../../public/images/slider/slider_02.jpg"
import image3 from "../../../public/images/slider/slider_03.jpg"
const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        width="2000px"
                        height="850px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        width="2000px"
                        height="850px"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        width="2000px"
                        height="850px"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider