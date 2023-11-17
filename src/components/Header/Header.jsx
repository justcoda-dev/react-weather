import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';


function appBarLabel(label) {
    return (
        <Toolbar style={{height:"80px"}}>
            <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                {label}
            </Typography>
        </Toolbar>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function EnableColorOnDarkAppBar() {
    return (
        <Stack spacing={4} sx={{flexGrow: 1}}>
            <ThemeProvider theme={darkTheme}>
                <AppBar  position="static" color="primary">
                    {appBarLabel('Weather')}
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}