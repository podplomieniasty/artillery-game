import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

import styles from './TitleView.module.scss';


const TitleView = ({onPlay}) => {
    return(
        <div className={styles.wrapper}>
            <Header />
            
            <p>A simple game about shooting tiles</p>
            <p>Made by Bartosz Burzec</p>
            <Link 
                className={styles.startGameBtn} 
                to="/game"
                onClick={onPlay}
                >Play</Link>
        </div>
    )
}

export default TitleView;