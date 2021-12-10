import React from 'react'
import styles from './Header.module.scss'
import logo from '../../images/artillery.png';
import PropTypes from 'prop-types';



const Header = ({titleVariant}) => {

    const headerClass = titleVariant ? styles.titleVariant : styles.gameVariant;
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={headerClass}>
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

Header.propTypes = {
    titleVariant: PropTypes.bool,
}

Header.defaultTypes = {
    titleVariant: false,
}