import React from 'react'
import styles from './Header.module.scss'
import logo from '../../images/artillery.png';


const Header = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Artillery
                </h1>
                <img src={logo}
                className={styles.logo}
                alt="logo"/>
            </div>
        </>
        
    )
    
}

export default Header;