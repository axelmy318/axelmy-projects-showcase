import React, { useState, useRef } from 'react';
import { WeatherPanel, WeatherTemp, WeatherIcon, WeatherWind } from 'react-weather-station';

const DashboardExample = () => {
    const [location, setLocation] = useState('lausanne')
    const locationRef = useRef()

    return (
        <>
            <input ref={locationRef} type='text' />&nbsp;
            <button onClick={() => setLocation(locationRef.current.value)}>search</button>
            
            <div style={{marginTop: '10px'}}></div>

            <WeatherPanel location={location} >
                <WeatherTemp color={'secondary'} />
                <div style={{marginBottom: '20px'}}></div>
                <WeatherIcon color={'warning'} />
                <div style={{marginBottom: '20px'}}></div>
                <WeatherWind color={'#a6501a'} />
            </WeatherPanel>
        </>
    );
};

export default DashboardExample
