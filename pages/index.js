import Head from "next/head"
import Header from "../src/components/header/Header"
import Slider from "../src/components/slider/Slider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "../src/components/category/Category";
import Banner from "../src/components/banner/Banner";
import Products from "../src/components/products/Products";
import Brand from "../src/components/brand/Brand";
import PromoBanner from "../src/components/promo/PromoBanner";
import { Customer } from "../src/components/customer/Customer";
export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mainConainer">
        <Header></Header>
        <Slider></Slider>
        <Category></Category>
        <Banner></Banner>
        <Products></Products>
        <Brand></Brand>
        <PromoBanner></PromoBanner>
        <Customer></Customer>
      </div>
    </div>
  )
}
