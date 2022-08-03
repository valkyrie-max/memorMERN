import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material'; 
import FileBase from 'react-file-base64';

const Form = () => {
   const [postData, setPostData] = useState({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
   });


   const handleSubmit = () => {

   }

   const clear = () => {

   }


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