// reducer is a function that accepts the state and also accepts the action 
   // based on the action type 

   // (state was renamed to)

export default function reducer(posts = [], action){
   switch (action.type) {
      case "FETCH_ALL":
         return action.payload;
      case "CREATE": 
         return [...posts, action.payload];
      case "UPDATE": 
         return posts.map((post) => post._id === action.payload._id ? action.payload : post);
      default:
         return posts;
   }
}