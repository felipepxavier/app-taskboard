import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import task from './task/reducer';

export default combineReducers({
  auth,
  user,
  task,
});
