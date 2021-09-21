import createDataContext from './createDataContext';
import apiServer from '../api/apiServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload;
    case 'edit_post':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_post':
      return state.filter(blogPost => blogPost.id !== action.payload);

    case 'authentication':
      return action.payload === 'not'
        ? console.log('login plaseasease')
        : console.log('hehe');

    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await apiServer.get('/api').catch(e => {
      console.log('someerre ', e);
    });
    dispatch({type: 'get_posts', payload: response.data});
  };
};

const addBlogPost = () => {
  return async (title, body, callback) => {
    await apiServer.post('/api/', {
      title,
      body,
    });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await apiServer.delete(`/api/${id}`);
    dispatch({type: 'delete_post', payload: id});
  };
};

const editBlogPost = dispatch => {
  return async (id, title, body, callback) => {
    await apiServer.put(`/api/${id}`, {title, body});
    dispatch({type: 'edit_post', payload: {id, title, body}});
    if (callback) {
      callback();
    }
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
);
