import { combineReducers } from 'redux';
import crypto from './crypto';
import cryptoAPI from './cryptoApi';
import mainFilter from './mainFilter'

// rootReducer

export default combineReducers({
    crypto,
    cryptoAPI,
    mainFilter
});