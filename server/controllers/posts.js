import PostMessage from "../models/postMessage.js";

// all the handlers for the routes 
   // extracting all the logic from the routes


export const getPosts = async (req, res) => {
   try {
      // code happens if everything is successful
         // const postMessages = PostMessage.find(); <--- .find() takes time, means its async action
         // since its async, adding await
      const postMessages = await PostMessage.find();
         // return if works  
      res.status(200).json(postMessages); 
   } catch (error) {
      // code happens if error happens
      res.status(404).json({ message: error.message });
   }
}

export const createPost = (req, res) => {
   res.send('Post Creation');
}