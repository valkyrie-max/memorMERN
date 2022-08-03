import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   typography: {
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
   },
   palette: {
      primary: {
         light: '#ffffff',
         main: '#f0f7fc',
         dark: '#bdc4c9',
         contrastText: '#000',
      },
      secondary: {
         light: '#487087',
         main: '#18455a',
         dark: '#001e31',
         contrastText: '#fff',
      }
   }
});

export default theme; 