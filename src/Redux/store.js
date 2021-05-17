import {combineReducers, createStore} from 'redux';
import authReducer from './Reducers/Auth.Reducers/Auth.reducers';

const rootReducer = combineReducers({
  Auth: authReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
