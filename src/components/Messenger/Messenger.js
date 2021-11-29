import React, { useState } from 'react'
import styles from './Messenger.module.scss'

const msgArray = [
    "Come in soldier, this is the HQ speaking. There's an enemy base hidden somewhere around. Navigate the artillery cannon, locate the base and destroy it, over and out.",
]

const Messenger = () => {
    const [messages, setMessages] = useState(msgArray);

    return(
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                messenger_military_x64.exe
            </div>
            {
                messages.map((msg, index) => 
                    <p key={index} className={styles.message}>
                        {`>  ${msg}`}
                    </p>
                )
            }
        </div>
    )
}

export default Messenger;