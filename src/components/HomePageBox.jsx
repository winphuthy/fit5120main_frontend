import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "../templates/modules/components/Typography";
import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const fontcolor = 'White';

const cardColumn = {
    padding: '20px',
    border: '2px solid white',
    borderRadius: '20px'
}


export default function HomePageBox(props) {

    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        if (props.to) {
            setHovered(true);
        }
        // console.log("handleMouseEnter:   " + hovered)
    };

    const handleMouseLeave = () => {
        setHovered(false);
        // console.log("handleMouseEnter:   " + hovered)
    };


    const item = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 5,
        // border: hovered ? '10px solid #333' : 'none',
        background: hovered ? '#333' : 'none',
        cursor: 'pointer',
    };

    const handleClick = () => {
        if (props.to) {
            navigate(props.to);
        }
    };
    return <Grid item xs={12} md={4}>
        <Box sx={item} style={cardColumn}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onClick={handleClick}>
            <Box
                component="img"
                src={props.icon}
                alt="clock"
                sx={{
                    height: 100,
                    // border: hovered ? '10px solid #000000' : 'none',
                    // cursor: 'pointer',
                }}
            />
            <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
                {props.title}:
            </Typography>
            <Typography variant="h5" color={fontcolor}>
                {props.content}
                {/*{'that you will not find anywhere else.'}*/}
            </Typography>
        </Box>
    </Grid>;
}