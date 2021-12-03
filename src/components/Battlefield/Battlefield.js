import React, { useState } from 'react'
import Tile from '../Tile/Tile';
import styles from './Battlefield.module.scss'



const Battlefield = ({ onShot, tiles, isHit}) => {
    return(
        <div className={styles.wrapper}>
            {isHit &&
                <div className={styles.winMessage}><h1>You won!</h1></div> }
            
            {
                tiles.map((tile, index) => (
                    <Tile onShot={onShot} key={index} {...tile}/>
                ))
            }


        </div>
    )
}

export default Battlefield;