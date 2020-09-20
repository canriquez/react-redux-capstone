import { combineReducers } from 'redux';
import crypto from './crypto';
import cryptoAPI from './cryptoApi';
import mainFilter from './mainFilter'
import currencyFilter from './currencyFilter'
import page from './page'

// rootReducer

export default combineReducers({
    crypto,
    cryptoAPI,
    mainFilter,
    currencyFilter,
    page
});