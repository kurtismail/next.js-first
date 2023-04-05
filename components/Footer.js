import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.a}>© Copyright. All Rights Reserved  {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer