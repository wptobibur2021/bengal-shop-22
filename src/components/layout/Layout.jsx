import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout