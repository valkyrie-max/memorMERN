import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material'; 
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentID, setCurrentID }) => {
   const [postData, setPostData] = useState({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
   });
   const post = useSelector((state) => currentID ? state.posts.find((p) => p._id === currentID) : null);
   const dispatch = useDispatch();


   const handleSubmit = (e) => {
      e.preventDefault();

      if (currentID) {
         dispatch(updatePost(currentID, postData));
      } else {
         dispatch(createPost(postData));
      }
   }

   const clear = () => {

   }

   useEffect(() => {
      if (post) setPostData(post); 
   }, [post])
   

   return(
      <Paper>
         <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6" component={"div"}>Create your own MEMORee :)</Typography>
            <div className='formFields'>
               <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
               <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
               <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
               <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
               <div>
                  <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
               </div>
            </div>

            <div className="formButtons">
               <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit!</Button>
               <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear the form</Button>
            </div>
         </form>
      </Paper>
   )
}

export default Form;