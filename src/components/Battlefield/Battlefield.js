import React from 'react'
import Tile from '../Tile/Tile';
import styles from './Battlefield.module.scss'
import { Navigate } from 'react-router-dom'

const Battlefield = ({onShot, tiles, isHit, shots}) => {
    
    if(!tiles.length)
        return <Navigate to='/' />

    return(
        <div className={styles.wrapper}>
            {isHit &&
                <div className={styles.winMessage}>
                    <h1>You won!</h1>
                    <p>It took you {shots} shots to destroy the base!</p>
                    <button 
                        className={styles.restartGameBtn}
                        onClick={() => {window.location.reload()}}>
                            Back to title</button>
                </div> 
            }
            {
                tiles.map((tile, index) => (
                    <Tile onShot={onShot} key={index} {...tile}/>
                ))
            }
        </div>
    )
}

export default Battlefield;