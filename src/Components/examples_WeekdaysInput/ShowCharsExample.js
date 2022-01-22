import React, { useState } from 'react';
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

export default ShowCharsExample;
