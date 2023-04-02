import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import data from '../data/data.json';
// import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement} from "chart.js";

/*ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)*/

const options = {
    // responsive: true,
    // aspectRatio: 1,
    maintainAspectRatio: false
}

export default function LineChart() {

    const labelContent = data.map(value => value.Year);
    const ageDataFirst = data.map(value => Object.values(value)[2]);
    const ageDataSecond = data.map(value => Object.values(value)[3]);
    const firstLabel = Object.keys(data[0])[2];
    const secondLabel = Object.keys(data[0])[3];

    console.log(ageDataFirst);
    console.log(ageDataSecond);
    console.log(firstLabel);
    console.log(secondLabel);

    const chartData = {
        labels: labelContent,
        datasets: [{
            label: firstLabel,
            data: ageDataFirst
        },
        {
            label: secondLabel,
            data: ageDataSecond
        }]
    }
    return (
            <Line data={chartData} options={options}/>
    )
};

