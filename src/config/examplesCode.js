export const getCodeFor = (project, example) => {
    if(codebook[project] && codebook[project][example])
        return codebook[project][example]
    else
        return `Code unavailable`;
}

const codebook = {
    reactweekdaysinput: {
        basicexample: `import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const BasicExample = () => {
    const [value, setValue] = useState([0, 0, 1, 0, 0, 1, 0])

    return (
        <WeekdaysInput 
            value={value}
            onChange={(value) => setValue(value)}
        />
    );
};

export default BasicExample;`,
        customstyles: `import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const CustomStyleExample = () => {
    const [value, setValue] = useState([0, 0, 1, 0, 0, 1, 0])

    return (
        <WeekdaysInput 
            value={value}
            onChange={(value) => setValue(value)}
            activeDayStyle={{
                backgroundColor: 'green',
                color: '#000',
            }}
            inactiveDayStyle={{
                backgroundColor: '#6b3232',
                color: 'white',
            }}
            dayStyle={{
                margin: '5px',
                borderRadius: '10px',
                padding: '5px',
            }}
            inputStyle={{
                padding: '10px',
                border: '1px solid black',
            }}
        />
    );
};

export default CustomStyleExample;`,
        forcedstate: `import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const ForcedStateExample = () => {
    const [value, setValue] = useState([0, 0, 1, 0, 0, 1, 0])

    return (
        <WeekdaysInput 
            value={value}
            onChange={(value) => setValue(value)}
            forcedState={{
                0: 'none',
                1: 'active',
                2: 'active',
                3: 'none',
                4: 'none',
                5: 'inactive',
                6: 'inactive'
            }}
        />
    );
};

export default ForcedStateExample;`,
        showchars: `import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const ShowCharsExample = () => {
    const [value, setValue] = useState([0, 0, 1, 0, 0, 1, 0])

    return (
        <WeekdaysInput 
            value={value}
            onChange={(value) => setValue(value)}
            showChars={2}
        />
    );
};

export default ShowCharsExample;`,
        customdays: `import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const CustomDaysExample = () => {
    const [value, setValue] = useState([0, 0, 1, 0, 0, 1, 0])

    return (
        <WeekdaysInput 
            value={value}
            onChange={(value) => setValue(value)}
            days={[
                'lundi',
                'mardi',
                'mercredi',
                'jeudi',
                'vendredi',
                'samedi',
                'dimanche'
            ]}
            textCase={'firstToUpper'}
        />
    );
};

export default CustomDaysExample;`,
    },
    reactwindowopen: {
        basicexample: `import React, { useState } from 'react'
import { NewWindow } from 'react-window-open'

const BasicExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <>
            {isOpen && <NewWindow onClose={() => setIsOpen(false)}>
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
            </NewWindow>}

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

export default BasicExample`,
        offestsandsizes: `import React, { useState } from 'react'
import { NewWindow } from 'react-window-open'

const BasicExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <>
            {isOpen && <NewWindow onClose={() => setIsOpen(false)}>
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
            </NewWindow>}

            <p>Counter on the original page : <strong>{counter}</strong></p>
            <button style={styles.button} onClick={() => setIsOpen(!isOpen)}>
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

export default BasicExample`,
    }
}