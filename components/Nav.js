import Link from 'next/link'
import React from 'react'
import styles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <h4 className='button'>Home</h4>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <h4 className='button'>About</h4>
                    </Link>
                </li>
                <li>
                    <Link href="/videos">
                        <h4 className='button'>Video</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav