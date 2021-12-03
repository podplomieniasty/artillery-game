import React from 'react'
import styles from './Messenger.module.scss'

const Messenger = ({messages}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                messenger_military_x64.exe
            </div>

			<div className={styles.console}>
            {
                messages.map((msg, index) => 
                    <p key={index} className={styles.message}>
                        {`>  ${msg}`}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Messenger;