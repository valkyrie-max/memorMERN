import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; 

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memor-logo-transparent.png'

import theme from './styles';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth="lg">
            <AppBar position="static" color="primary" sx={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
               padding: '10px 0px'
            }}>
               <Typography mr={2} variant="h2" fontWeight={600} color="secondary" align="center" component={"h1"}>Memor</Typography>
               <img src={memories} alt="memor" height="100" />
            </AppBar>


            <Typography component={"div"}>
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