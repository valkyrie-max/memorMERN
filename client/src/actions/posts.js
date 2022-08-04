import * as api from '../api'; 

// action Creators are functions that return and action
// action is an object, has type and payload (data)
// redux thunk, async logic, add async and dispatch the action 
export const getPosts = () => async (dispatch) => {
   try {
      const { data } = await api.fetchPosts(); 
      dispatch({
         type: 'FETCH_ALL',
         payload: data
      })
   } catch (error) {
      console.log(error.message)
   }
}

export const createPost = (post) => async (dispatch) => {
   try {
      const { data } = await api.createPost(post); 
      dispatch({
         type: 'CREATE',
         payload: data
      })
   } catch (error) {
      console.log(error.message)
   }
}

export const updatePost = (id, post) => async (dispatch) => {
   try {
      const { data } = await api.updatePost(id, post); 
      dispatch({
         type: 'UPDATE',
         payload: data
      })
   } catch (error) {
      console.log(error.message)
   }
}
