import mongoose from 'mongoose'; 

// mongoose allows to give uniformity to documents
   // specifying what each posts has to have 
const postSchema = mongoose.Schema({   
   title: String,
   message: String,
   creator: String,
   tags: [String],
   // will convert image to a string
   selectedFile: String,
   likeCount: {
      type: Number,
      default: 0
   },
   createdAt: {
      type: Date,
      default: new Date()
   }
});

const PostMessage = mongoose.model('PostMessage', postSchema)

// exporting mongoose model
export default PostMessage;