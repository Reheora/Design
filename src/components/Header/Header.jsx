import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <img src={logo} alt="logo" />
                <div className={styles.contact}>
                    <a className={styles.tel} href="tel:88002220441">8 800 222 04 41</a>
                    <a className={styles.question} href="#">Позвонить вам?</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
