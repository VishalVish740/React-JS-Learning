import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const ReactSpeedomtr = () => {
    const occValue = 33; // or make this dynamic later

    return (
        <div>
            <ReactSpeedometer
                value={occValue}
                minValue={0}
                maxValue={100}
                segments={5}
                needleColor="steelblue"
                startColor="red"
                endColor="green"
                needleHeightRatio={0.7}
                currentValueText={`Occupancy: ${occValue}%`}
                width={480}
                height={400}
                customSegmentLabels={[
                    { text: "20%", position: "INSIDE", color: "black", fontSize: "12px" },
                    { text: "40%", position: "INSIDE", color: "black", fontSize: "12px" },
                    { text: "60%", position: "INSIDE", color: "black", fontSize: "12px" },
                    { text: "80%", position: "INSIDE", color: "black", fontSize: "12px" },
                    { text: "100%", position: "INSIDE", color: "black", fontSize: "12px" },
                ]}
            />

        </div>
    );
};

export default ReactSpeedomtr;  