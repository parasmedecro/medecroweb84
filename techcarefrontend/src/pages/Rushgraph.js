import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

// Register the chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function GraphPage() {
    // State for graph data readiness and dynamic data
    const [isGraphReady, setIsGraphReady] = useState(false);
    const [lineData, setLineData] = useState({
        labels: [
            '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
            '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
            '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
            '21:00', '22:00', '23:00'
        ],
        datasets: [
            {
                label: 'Visitors',
                data: [30, 20, 50, 40, 10, 60, 70, 30, 90, 50, 60, 40, 100, 80, 90, 50, 20, 40, 70, 50, 40, 30, 20, 10],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    });

    // Pie Chart Data
    const pieData = {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [
            {
                data: [35, 40, 25],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }
        ]
    };

    // Define the maximum value for the line chart and the time limit
    const maxValue = 10;
    const timeLimit = 10000; // 10 seconds in milliseconds

    // Function to simulate data loading
    const loadGraphData = () => {
        setTimeout(() => {
            setIsGraphReady(true);
        }, 1000); // Simulate data loading delay
    };

    useEffect(() => {
        loadGraphData();

        // Track start time
        const startTime = Date.now();

        // Simulate data update
        const updateInterval = setInterval(() => {
            if (isGraphReady) {
                setLineData(prevData => {
                    // Example: Increment the last value and shift the data
                    const newData = [...prevData.datasets[0].data];
                    const lastValue = newData[newData.length - 1];
                    
                    // Check if max value is reached or time limit exceeded
                    if (lastValue >= maxValue || (Date.now() - startTime) >= timeLimit) {
                        clearInterval(updateInterval); // Stop updating
                        return prevData; // Return current data without changes
                    }

                    newData.shift(); // Remove the first value
                    newData.push(lastValue + Math.random() * 10 - 5); // Add new value
                    
                    return {
                        ...prevData,
                        datasets: [
                            {
                                ...prevData.datasets[0],
                                data: newData
                            }
                        ]
                    };
                });
            }
        }, 1000); // Update every second

        return () => clearInterval(updateInterval); // Clean up the interval on component unmount
    }, [isGraphReady]);

    // Conditional rendering in case data is not yet available
    if (!isGraphReady) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Zig Zag Line Graph */}
            <div className="w-full md:w-1/2 mb-10">
                <h2 className="text-xl font-semibold text-center mb-4">Hourly Visitors (Zig Zag Line Graph)</h2>
                <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>

            {/* Pie Chart */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold text-center mb-4">Visitors by Time of Day (Pie Chart)</h2>
                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </div>
    );
}
