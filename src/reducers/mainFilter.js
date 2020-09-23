import { FILTER_UPDATE } from '../helpers/help';

const mainFilter = (state = 'market_cap_desc', action) => {
  switch (action.type) {
    case FILTER_UPDATE:
      // eslint-disable-next-line
      console.log('@mainFilter reducer, filter is : ' + action.filter)
      return action.filter;

    default:
      return state;
  }
};

export default mainFilter;
