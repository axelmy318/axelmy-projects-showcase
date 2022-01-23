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

export default ShowCharsExample;`
    }
}