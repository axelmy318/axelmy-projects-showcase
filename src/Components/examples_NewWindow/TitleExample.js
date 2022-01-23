import React, { useState } from 'react'
import { NewWindow } from 'react-window-open'

const TitleExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <>
            {isOpen && <>
                <NewWindow 
                title={'Test custom title !'}
                onClose={() => setIsOpen(false)}>
                    <p>This text is displayed in a new window. 👀</p>
                    <p>And all the states are shared ! 👌</p>
                    <p>Counter in the new window : <strong>{counter}</strong></p>
                    <button 
                        style={{...styles.button, backgroundColor: 'green'}} 
                        onClick={() => setCounter(counter+1)}
                    >
                        Increment from the new window
                    </button>&nbsp;
                    <button 
                        style={{...styles.button, backgroundColor: 'red'}} 
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                </NewWindow>
            </>}

            <p>Counter on the original page : <strong>{counter}</strong></p>
            <button 
                style={styles.button} 
                onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? 'Open' : 'Close'}
            </button> &nbsp;
            <button 
                style={{...styles.button, backgroundColor: 'green'}}
                onClick={() => setCounter(counter+1)}
            >
                Increment
            </button>
        </>
    )
}

const styles = {
    button: {
        backgroundColor: "skyblue",
        border: "none",
        color: "white",
        padding: "10px 10px",
        borderRadius: '10px',
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px"
    }
}

export default TitleExample