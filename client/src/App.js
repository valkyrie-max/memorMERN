import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; 

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import memories from './images/memor-logo-transparent.png'

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

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth="lg">
            <AppBar position="static" color="primary">
               <Typography variant="h2" fontWeight={600} color="secondary" align="center">Memor</Typography>
               <img src={memories} alt="memor" height="60" />
            </AppBar>


            <Typography>
               <Grow in >
                  <Container>
                     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                           <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <Form />
                        </Grid>
                     </Grid>
                  </Container>
               </Grow>
            </Typography>
         </Container>
      </ThemeProvider>
   )
}

export default App;