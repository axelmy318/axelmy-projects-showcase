import React, { useState } from 'react';
import { WeekdaysInput } from 'react-weekdays-input';

const BasicExample = () => {
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

export default BasicExample;
