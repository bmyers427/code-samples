import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import api from './apiReducer';
import downloads from './downloadsReducer';
import auth from './authReducer';
import users from './usersReducer';
import articles from './articlesReducer';

const rootReducer = combineReducers({
  api,
  downloads,
  auth,
  users,
  articles,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
