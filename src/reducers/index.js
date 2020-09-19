import { combineReducers } from 'redux';
import crypto from './crypto';
import cryptoAPI from './cryptoApi';

// rootReducer

export default combineReducers({
    crypto,
    cryptoAPI,
});