import * as React from 'react';
import './MuiNavBar.css'
import icon from '../images/SiliconSharksIcon_white.png';
import {AppBar, Button, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {NavLink} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const buttonSX = {
    '&.active': {
        backgroundColor: '#194870', // 替换为你想要的颜色
    }
}

export const MuiNavBar = () => {

    const [anchorEl_DC, setAnchorEl_DC] = React.useState(null);
    const open_DC = Boolean(anchorEl_DC);
    const handleClick_DC = (event) => {
        setAnchorEl_DC(event.currentTarget);
    };

    const [anchorEl_DS, setAnchorEl_DS] = React.useState(null);
    const open_DS = Boolean(anchorEl_DS);
    const handleClick_DS = (event) => {
        setAnchorEl_DS(event.currentTarget);
    };

    const handleClose_DC = () => {
        setAnchorEl_DC(null);
    };

    const handleClose_DS = () => {
        setAnchorEl_DS(null);
    };

    return (
        <div className='muinavbar'>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton component={NavLink} to='/' size='large' edge='start' color='inherit' aria-label='logo'>
                        <img src={icon} style={{width: 'auto', height: "5vh", minHeight: '25px'}} alt='icon'/>
                    </IconButton>
                    <Typography variant='h6' component='dic' sx={{flexGrow: 1}}>
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button component={NavLink} to='/' color='inherit' sx={buttonSX}>Home</Button>
                        <Button color='inherit'
                                onClick={handleClick_DC}
                                endIcon={<KeyboardArrowDownIcon/>}
                                aria-controls={open_DC ? 'basic-menu_DC' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open_DC ? 'true' : undefined}>
                            Digital Communication
                        </Button>
                        <Button color='inherit'
                                onClick={handleClick_DS}
                                endIcon={<KeyboardArrowDownIcon/>}
                                aria-controls={open_DS ? 'basic-menu_DS' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open_DS ? 'true' : undefined}
                        >
                            Digital Service
                        </Button>
                        <Button component={NavLink} to= 'avoidingscam' color='inherit' sx={buttonSX}>Avoiding Scams</Button>
                        <Button component={NavLink} to='learningsuggestions' color='inherit' sx={buttonSX}>Learning Suggestions</Button> 
                        <Button component={NavLink} to='quizpage' color='inherit' sx={buttonSX}>Quiz</Button>   
                        <Button component={NavLink} to='questionnaire' color='inherit' sx={buttonSX}>Questionnaire</Button>   

  
                    </Stack>
                    <Menu
                        id="basic-menu_DC"
                        anchorEl={anchorEl_DC}
                        open={open_DC}
                        onClose={handleClose_DC}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={NavLink} to="whatsapp" onClick={handleClose_DC}
                                  sx={buttonSX}>Whatsapp</MenuItem>
                        <MenuItem component={NavLink} to="zoom" onClick={handleClose_DC} sx={buttonSX}>Zoom</MenuItem>
                        <MenuItem component={NavLink} to="facebook" onClick={handleClose_DC}
                                  sx={buttonSX}>Facebook</MenuItem>
                        <MenuItem component={NavLink} to="facetime" onClick={handleClose_DC}
                                  sx={buttonSX}>FaceTime</MenuItem>
                    </Menu>

                    <Menu
                        id="basic-menu_DS"
                        anchorEl={anchorEl_DS}
                        open={open_DS}
                        onClose={handleClose_DS}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={NavLink} to="email" onClick={handleClose_DS} sx={buttonSX}>Email</MenuItem>
                        <MenuItem component={NavLink} to="mygov" onClick={handleClose_DS} sx={buttonSX}>MyGov</MenuItem>
                        <MenuItem component={NavLink} to="medicare" onClick={handleClose_DS}
                                  sx={buttonSX}>Medicare</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}