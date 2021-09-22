import { combineReducers } from 'redux';
import plantReducer from './addReducer';
import singInReducer from './signInReducer';

export default combineReducers({
    plantReducer,
    singInReducer
});

