import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit">
                SiliconSharks
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

/*const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'warning.main',
    mr: 1,
    '&:hover': {
        bgcolor: 'warning.dark',
    },
};

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Français',
    },
];*/

export default function AppFooter() {
    return (
        <Typography
            component="footer"
            sx={{display: 'flex', bgcolor: '#333', color: '#f2f2f2'}}
        >
            <Container sx={{my: 8, display: 'flex'}}>
                <Grid container spacing={5}>

                    <div style={{margin: 'auto'}}>
                        <Copyright/>
                    </div>
                </Grid>
            </Container>
        </Typography>
    );
}
