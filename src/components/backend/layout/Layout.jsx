import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Meta from '../../meta/Meta'

const Layout = ({ children }) => {
    return (
        <div className="dashBoardMain">
            <Meta></Meta>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Layout