import React from 'react'
import styles from "../styles/Layout.module.css";
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div>
                <main className={styles.main}>
                    <h1>Layout bütün sayfada görünür</h1>
                    {children}
                </main>
            </div >
            <Footer />
        </>
    )
}

export default Layout