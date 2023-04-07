import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import LandingPageData from '../data/LandingPageData.json'
import {Bar} from "react-chartjs-2";
import data from "../data/data.json";
import Button from "@mui/material/Button";
import {makeStyles} from "@mui/styles";

const YearList = LandingPageData.map(value => value['Year']);
const SelectList = ['Inclusion Index', 'Accessibility Index', 'Ability Index'];

const options = {
    // responsive: true,
    // aspectRatio: 2,
    maintainAspectRatio: false
}


const labelContent = LandingPageData.map(value => value.Year);
const ageDataFirst = LandingPageData.map(value => Object.values(value)[2]);
const ageDataSecond = LandingPageData.map(value => Object.values(value)[3]);
const firstLabel = Object.keys(LandingPageData[0])[2];

let secondLabel;

secondLabel = Object.keys(LandingPageData[0])[3];

const useStyles = makeStyles({
    select: {
        '& .MuiSelect-root': {
            backgroundColor: 'white !important',
            color: 'white !important',
        },
    },
});

export default function InteractionChart() {

    const [year, setYear] = useState('');
    const [selection, setSelection] = useState('');
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

        // console.log('landingPageData: ' + LandingPageData)

        // let data = JSON.stringify(LandingPageData);

        // console.log('data: ' + data);

        let outFlag = true;

        for (let i = 0; i < LandingPageData.length; i++) {
            let key = LandingPageData[i];
            // console.log('key: ' + key['Year'])
            if (key['Year'] === year) {
                if (selection === 'InclusionIndex') {
                    labelFirst = '14-49_Avg_Digital_Inclusion_Index';
                    labelSecond = '50+_Avg_Digital_Inclusion_Index';
                    ageDataFirst = key['14-49_Avg_Digital_Inclusion_Index'];
                    ageDataSecond = key['50+_Avg_Digital_Inclusion_Index'];
                } else if (selection === 'AccessibilityIndex') {
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

    const classes = useStyles();

    const resetCallback = useCallback((event) => {
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
        <div style={{height: '300px'}} className={classes.select}>
            <div style={{margin: '20px 0px'}} className={classes.select}>
                <FormControl fullWidth>
                    <InputLabel id="SelectionInput">Selection</InputLabel>
                    <Select
                        labelId='SelectionInput'
                        label="Selection"
                        value={selection}
                        onChange={event => setSelection(event.target.value)}
                    >
                        {selectOptions}
                    </Select>
                </FormControl>
            </div>
            <div style={{margin: '20px 0px'}}>
                <FormControl fullWidth>
                    <InputLabel id="YearInput">Year</InputLabel>
                    <Select
                        labelId='YearInput'
                        label="Year"
                        value={year}
                        onChange={event => setYear(event.target.value)}
                    >
                        {yearOptions}
                    </Select>
                </FormControl>
            </div>
            <Button variant="outlined" onClick={resetCallback}>Reset</Button>
            <Bar data={chartData} options={options}/>
        </div>
    )
};