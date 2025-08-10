import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Gauze = () => {
    return (
        <div style={{ padding: '10px', height: '30px' }}>
            <h2>Custom Gauge with 5 Colors</h2>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={5}
                percent={0.5} 
                colors={["#FF0000", "#00FF00", "#FFFF00", "#0000FF", "#FFC0CB"]}
                arcWidth={0.3}
                textColor="#000"
                style={{ height: '50%', width: '50%' }} 
            />
        </div>
    );
}

export default Gauze;
