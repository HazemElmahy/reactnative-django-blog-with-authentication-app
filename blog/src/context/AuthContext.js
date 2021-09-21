import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import apiServer from '../api/apiServer';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'login':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'logout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalLogin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'login', payload: token});
    RootNavigation.navigate('Index');
  } else {
    RootNavigation.navigate('Login');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};
const register = dispatch => {
  return async ({email, username, password}) => {
    try {
      const response = await apiServer.post('/register', {
        email,
        username,
        password,
      });
      RootNavigation.navigate('Login')
    } catch (err) {
      console.log('err ', err);
      dispatch({type: 'add_error', payload: err.message});
    }
  };
};
const login = dispatch => {
  return async ({username, password}) => {
    console.log('asdfasdf', username, password);
    try {
      const response = await apiServer.post('/login', {
        username,
        password,
      });
      await AsyncStorage.setItem('token', response.data.jwt);
      dispatch({type: 'login', payload: response.data.jwt});
      console.log(response.data);
      RootNavigation.navigate('Index');
    } catch (err) {
      dispatch({type: 'add_error', payload: err.message});
    }
  };
};
const logout = dispatch => async () => {
  try {
    await apiServer.post('/logout');
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
    RootNavigation.navigate('Login')
  } catch (err) {
    console.log('logout err ', err);
  }
};
 
export const {Provider, Context} = createDataContext(
  authReducer,
  {login, register, logout, clearErrorMessage, tryLocalLogin},
  {token: null, errorMessage: ''},
);
