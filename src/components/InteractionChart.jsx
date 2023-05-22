import './InteractionChart.css'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import LandingPageData from '../data/LandingPageData.json'
import {Bar} from "react-chartjs-2";
import Button from "@mui/material/Button";

const YearList = LandingPageData.map(value => value['Year']);
const SelectList = ['Inclusion Index', 'Accessibility Index', 'Ability Index'];

const options = {
    // responsive: true,
    // aspectRatio: 2,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Year',
                font: {
                    size: 18
                }
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Score',
                font: {
                    size: 18
                }
            },
        }
    }
}

const labelContent = LandingPageData.map(value => value.Year);
const ageDataFirst = LandingPageData.map(value => Object.values(value)[2]);
const ageDataSecond = LandingPageData.map(value => Object.values(value)[3]);

const firstLabel = Object.keys(LandingPageData[0])[2];
let secondLabel;

secondLabel = Object.keys(LandingPageData[0])[3];

export default function InteractionChart() {

    const [year, setYear] = useState('');
    const [selection, setSelection] = useState('');
    const [chartData, setChartData] = useState({
        labels: labelContent,
        datasets: [
            {
                label: firstLabel,
                data: ageDataFirst,
                backgroundColor: ['#34698e']
            },
            {
                label: secondLabel,
                data: ageDataSecond,
                backgroundColor: ['#98495a']
            }
        ]
    });
    /*const yearOptions = YearList.map((value) =>
        < MenuItem value={parseInt(value)} id={parseInt(value)}>{value}</MenuItem>
    )
    const selectOptions = SelectList.map((value) =>
        < MenuItem value={value} id={value}>{value}</MenuItem>
    )*/

    useEffect(() => {

        let ageDataFirst, ageDataSecond;
        let labelFirst, labelSecond;

        // console.log('useEffect in actived')
        // console.log('landingPageData: ' + LandingPageData)

        // let data = JSON.stringify(LandingPageData);

        // console.log('data: ' + data);

        let outFlag = true;

        for (let i = 0; i < LandingPageData.length; i++) {
            let key = LandingPageData[i];
            // console.log('key: ' + key['Year'])
            // console.log('selection: ' + selection);
            if (key['Year'] === year) {
                if (selection === 'Inclusion Index') {
                    labelFirst = '14-49_Avg_Digital_Inclusion_Index';
                    labelSecond = '50+_Avg_Digital_Inclusion_Index';
                    ageDataFirst = key['14-49_Avg_Digital_Inclusion_Index'];
                    ageDataSecond = key['50+_Avg_Digital_Inclusion_Index'];
                } else if (selection === 'Accessibility Index') {
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
                outFlag = false;
                break;
            }
        }

        // console.log('ageDataFirst: ' + ageDataFirst);
        // console.log('ageDataSecond: ' + ageDataSecond);

        if (outFlag) {
            return;
        }

        ageDataFirst = parseInt(ageDataFirst);
        ageDataSecond = parseInt(ageDataSecond);

        const newData = {
            labels: [year],
            datasets: [
                {
                    label: labelFirst,
                    data: [ageDataFirst],
                    backgroundColor: ['#34698e']
                },
                {
                    label: labelSecond,
                    data: [ageDataSecond],
                    backgroundColor: ['#98495a']
                }
            ]
        }

        setChartData(newData);

    }, [year, selection]);

    const resetCallback = useCallback(() => {
        setChartData({
            labels: labelContent,
            datasets: [
                {
                    label: firstLabel,
                    data: ageDataFirst,
                    backgroundColor: ['#34698e']

                },
                {
                    label: secondLabel,
                    data: ageDataSecond,
                    backgroundColor: ['#98495a']
                }
            ]
        })
        setYear('');
        setSelection('');
    }, []);

    return (
        <div style={{height: '300px'}}>
            <div style={{margin: '20px 0px'}}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="SelectionInput">Selection</InputLabel>
                    <Select
                        labelId='SelectionInput'
                        label="Selection"
                        value={selection}
                        onChange={event => setSelection(event.target.value)}
                    >
                        {/*{selectOptions}*/}
                        {
                            SelectList.map(
                                (value, index) => (
                                    < MenuItem value={value} id={index.toString()}>{value}</MenuItem>
                                )
                            )
                        }
                    </Select>
                </FormControl>
            </div>
            <div style={{margin: '20px 0px'}}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="YearInput">Year</InputLabel>
                    <Select
                        labelId='YearInput'
                        label="Year"
                        value={year}
                        onChange={event => setYear(event.target.value)}
                    >
                        {/*{yearOptions}*/}
                        {
                            YearList.map(
                                (value, index) =>
                                    < MenuItem value={parseInt(value)} id={index.toString()}>
                                        {value}
                                    </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </div>
            <Button variant="outlined" onClick={resetCallback}>Reset</Button>
            <Bar data={chartData} options={options}/>
        </div>
    );
};