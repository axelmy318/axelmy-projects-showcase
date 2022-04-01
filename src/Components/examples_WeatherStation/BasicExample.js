import React, { useState, useRef } from 'react';
import { WeatherWidget } from 'react-weather-station';

const BasicExample = () => {
    const [location, setLocation] = useState('lausanne')
    const locationRef = useRef()

    return (
        <>
            <input ref={locationRef} type='text' />&nbsp;
            <button onClick={() => setLocation(locationRef.current.value)}>search</button>
            
            <div style={{marginTop: '10px'}}></div>

            <WeatherWidget location={location} />
        </>
    );
};

export default BasicExample;
