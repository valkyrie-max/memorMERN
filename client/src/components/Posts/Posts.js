import React from 'react';
import { useSelector } from 'react-redux'; 

import { Grid, CircularProgress } from '@mui/material'; 

import Post from './Post/Post';

const Posts = ({ setCurrentID }) => {
   const posts = useSelector((state) => state.posts);

   console.log(posts)
   return(
      !posts.length ? <CircularProgress /> : (
         <Grid container alignItems="stretch" spacing={3}>
            {
               posts.map((post) => (
                  <Grid key={post._id} item xs={12} sm={6}>
                     <Post post={post} setCurrentID={setCurrentID} />
                  </Grid>
               ))
            }
         </Grid>
      )
   );
}

export default Posts;