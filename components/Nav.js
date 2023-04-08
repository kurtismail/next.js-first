import Link from 'next/link'
import React from 'react'
import styles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <Link href="https://nextjs.org/">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg" alt="" />
                </Link>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
                <li>
                    <Link href="/videos">
                        <p>Videos</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav