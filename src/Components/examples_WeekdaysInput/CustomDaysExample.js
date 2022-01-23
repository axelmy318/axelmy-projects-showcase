import React, { useState } from 'react';
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

export default CustomDaysExample;
