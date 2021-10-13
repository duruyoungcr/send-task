import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        button: {
            fontFamily: 'Gilroy-Medium, sans-serif',
            fontSize: '1rem',
        },
        input: {
            height: '48px'
        }
    },
    palette: {
        primary: {
            main: '#0747a6',
        },
        success: {
            main: '#4DC274',
        },
    }
})