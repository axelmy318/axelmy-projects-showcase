import React, { useState } from 'react'
import { NewWindow } from 'react-window-open'

const OffsetsAndSizesExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    const emojies = ['👋', '👀', '🙌', '😎', '😜'];
    const [emoji, setEmoji] = useState(Math.floor(Math.random() * emojies.length))

    const changeEmoji = () => setEmoji(Math.floor(Math.random() * emojies.length))

    return (
        <>
            {isOpen && <>
                <NewWindow 
                    width={500}
                    height={500}
                    top={400}
                    left={600}
                    onClose={() => setIsOpen(false)}
                >
                    <p>This text is displayed in a new window. 👀</p>
                    <p>And all the states are shared ! 👌</p>
                    <p>Selected emoji {emojies[emoji]}</p>
                    <button 
                        style={{...styles.button, backgroundColor: 'green'}} 
                        onClick={changeEmoji}
                    >
                        Change emoji
                    </button>&nbsp;
                    <button 
                        style={{...styles.button, backgroundColor: 'red'}} 
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                </NewWindow>
            </>}

            <p>Selected emoji {emojies[emoji]}</p>
            <button 
                style={styles.button} 
                onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? 'Open' : 'Close'}
            </button> &nbsp;
            <button 
                style={{...styles.button, backgroundColor: 'green'}}
                onClick={changeEmoji}
            >
                Change emoji
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

export default OffsetsAndSizesExample