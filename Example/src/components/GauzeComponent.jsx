import React from 'react';
import { GaugeComponent } from 'react-gauge-component';

const GauzeComponent = () => {
    return (
        <div style={{ backgroundColor: 'gray' }}>
            <div style={{ height: '350px', overflow: 'hidden' }}>
                <GaugeComponent
                    value={50}
                    type="semicircle"
                    labels={{
                        tickLabels: {
                            type: "inner",
                            defaultTickValueConfig: {
                                style: { fill: '#000', fontSize: 12 }
                            },
                            ticks: [
                                { value: 0 },
                                { value: 20 },
                                { value: 40 },
                                { value: 60 },
                                { value: 80 },
                                { value: 100 }
                            ]
                        }
                    }}
                    arc={{
                        subArcs: [
                            { limit: 20, color: '#FF0000' },   // Red
                            { limit: 40, color: '#FFA500' },   // Orange
                            { limit: 60, color: '#FFFF00' },   // Yellow
                            { limit: 80, color: '#00BFFF' },   // Blue
                            { color: '#800080' }               // Purple (fills to 100)
                        ],
                        padding: 0.02,
                        width: 0.3
                    }}
                    pointer={{
                        elastic: true,
                        animationDelay: 0
                    }}
                    style={{
                        height: '50%',
                        width: '50%'
                    }}
                />
            </div>
        </div>
    );
};

export default GauzeComponent;
