import React from 'react'
import styles from './Tile.module.scss'

const Tile = ({onShot, backgroundColor}) => {

    const styling = {
        backgroundColor: backgroundColor,
    }

    return(
        <li 
            className={styles.tile}
            style={styling}
            onClick={(e) => {onShot(e)}}
        />
    )
}

export default Tile;