import React from 'react'
import styles from './Battlefield.module.scss'

const difficulty = {
    easy: 10,
    medium: 15,
    hard: 30,
}

const Battlefield = () => {

    const currentDiff = difficulty.easy;
    
    const fields = [];

    for(let i = 0; i < currentDiff*10; i++)
    {
        fields.push(
            (<li 
                className={styles.li}
                key={i}>
                X
            </li>)
        )
    }


    return(
        <div className={styles.wrapper}>
            {fields}
        </div>
    )
}

export default Battlefield;