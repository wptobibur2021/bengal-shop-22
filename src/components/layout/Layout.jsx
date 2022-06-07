import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Meta from '../meta/Meta'
const Layout = ({ children }) => {
    return (
        <>
            <Meta></Meta>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout