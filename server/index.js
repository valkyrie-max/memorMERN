import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

// routers
import postRoutes from './routes/posts.js'; 

const app = express(); 

// every route inside of the postRoutes will start with posts
app.use('/posts', postRoutes);

// general setup 
   // 30mbs because images can be quite big 
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors()); 

// mongodb setup
   // using mongodb atlas version < hosting db on their cloud
   // in real applications need to be secure, hance hide whatever is below 
const CONNECTION_URL = 'mongodb+srv://akkaeya:CoolMongo123@cluster0.hpbhqzs.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000; 

   // not required but to avoid warnings 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
   .catch((error) => console.log(error.message))

   // makes sure we don't get any warnings 
// mongoose.set('useFindAndModify', false); < DEPRECIATED 