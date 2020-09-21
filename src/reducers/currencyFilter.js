import {
  CURRENCY_UPDATE,
  GET_CURRENT_CURRENCY,
} from '../helpers/help';

const currencyFilter = (state = 'usd', action) => {
  console.log(`@currencyFilter reducer, filter is : ${action.filter || 'not set'}`);
  console.log(`@currencyFilter reducer, action is : ${action.type}`);
  switch (action.type) {
    case CURRENCY_UPDATE:
      // eslint-disable-next-line
            console.log('In CURRENCY_UPDATE Switch wirh actio.filter : ' + action.filter)
      return action.filter;

    case GET_CURRENT_CURRENCY:
      // eslint-disable-next-line
            console.log('In GET_CURRENT_CURRENCY Switch with action : ' + action.type)
      return state;

    default:
      return state;
  }
};

export default currencyFilter;
