import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const BasicExample = () => {
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

export default BasicExample;
