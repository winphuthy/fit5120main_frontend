import {MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import LandingPageData from '../data/LandingPageData.json'
import {Bar} from "react-chartjs-2";
import data from "../data/data.json";

const YearList = LandingPageData.map(value => value['Year']);
const SelectList = ['InclusionIndex', 'AccessibilityIndex', 'AbilityIndex'];

const options = {
    // responsive: true,
    // aspectRatio: 2,
    maintainAspectRatio: false
}

let labelContent;
let ageDataFirst;
let ageDataSecond;
let firstLabel;
let secondLabel;
labelContent = LandingPageData.map(value => value.Year);
ageDataFirst = LandingPageData.map(value => Object.values(value)[2]);
ageDataSecond = LandingPageData.map(value => Object.values(value)[3]);
firstLabel = Object.keys(LandingPageData[0])[2];
secondLabel = Object.keys(LandingPageData[0])[3];

export default function InteractionChart() {

    const [year, setYear] = useState(2017);
    const [selection, setSelection] = useState('InclusionIndex');
    const [chartData, setChartData] = useState({
        labels: labelContent,
        datasets: [
            {
                label: firstLabel,
                data: ageDataFirst
            },
            {
                label: secondLabel,
                data: ageDataSecond
            }
        ]
    });

    const yearOptions = YearList.map((value) =>
        < MenuItem value={parseInt(value)}>{value}</MenuItem>
    )
    const selectOptions = SelectList.map((value) =>
        < MenuItem value={value}>{value}</MenuItem>
    )

    useEffect(() => {

        let ageDataFirst, ageDataSecond;
        let labelFirst, labelSecond;

        console.log('landingPageData: ' + LandingPageData)

        // let data = JSON.stringify(LandingPageData);

        console.log('data: ' + data);

        for (let i = 0; i < LandingPageData.length; i++) {
            let key = LandingPageData[i];
            console.log('key: ' + key['Year'])
            if (key['Year'] == year) {
                if (selection == 'InclusionIndex') {
                    labelFirst = '14-49_Avg_Digital_Inclusion_Index';
                    labelSecond = '50+_Avg_Digital_Inclusion_Index';
                    ageDataFirst = key['14-49_Avg_Digital_Inclusion_Index'];
                    ageDataSecond = key['50+_Avg_Digital_Inclusion_Index'];
                }else if (selection == 'AccessibilityIndex') {
                    labelFirst = '14-49_Avg_Digital_Accessibility_Index';
                    labelSecond = '50+_Avg_Digital_Accessibility_Index';
                    ageDataFirst = key['14-49_Avg_Digital_Accessibility_Index'];
                    ageDataSecond = key['50+_Avg_Digital_Accessibility_Index'];
                } else {
                    labelFirst = '14-49_Avg_Digital_Ability_Index';
                    labelSecond = '50+_Avg_Digital_Ability_Index';
                    ageDataFirst = key['14-49_Avg_Digital_Ability_Index'];
                    ageDataSecond = key['50+_Avg_Digital_Ability_Index'];
                }
            }
        }
        console.log('ageDataFirst: ' + ageDataFirst);
        console.log('ageDataSecond: ' + ageDataSecond);
        ageDataFirst = parseInt(ageDataFirst);
        ageDataSecond = parseInt(ageDataSecond);

        const newData = {
            labels: [year],
            datasets: [
                {
                    label: labelFirst,
                    data: [ageDataFirst]
                },
                {
                    label: labelSecond,
                    data: [ageDataSecond]
                }
            ]
        }

        setChartData(newData);

    }, [year, selection]);

    return (
        <div style={{height: '300px'}}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selection}
                label="Year"
                onChange={event => setSelection(event.target.value)}
            >
                {selectOptions}
            </Select>
            <Bar data={chartData} options={options}/>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Year"
                onChange={event => setYear(event.target.value)}
            >
                {yearOptions}
            </Select>
        </div>
    )
};