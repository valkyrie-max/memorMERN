import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { FiMoreHorizontal, FiThumbsUp, FiTrash } from "react-icons/fi";
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { deletePost  } from '../../../actions/posts'; 


const Post = ({ post, setCurrentID }) => {
   const dispatch = useDispatch();

   return(
      <Card>
         <CardMedia component="img" height="140" image={post.selectedFile} title={post.title} />

         <div>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
         </div>

         <div>
            <Button color="secondary" size="sm" onClick={() => setCurrentID(post._id)}>
               <FiMoreHorizontal />
            </Button>
         </div>

         <div>
            <Typography variant="body2" color="testSecondary">{
                  post.tags.map((tag) => `#${tag} `)
               }
            </Typography>
         </div>

         <CardContent>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="body1" gutterBottom>{post.message}</Typography>
         </CardContent>

         <CardActions>
            <Button size="small" color="secondary" onClick={() => {}}>
               <FiThumbsUp />
               Like
               {post.likeCount}
            </Button>
            <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
               <FiTrash />
               Delete
            </Button>
         </CardActions>
      </Card>
   )
}

export default Post;