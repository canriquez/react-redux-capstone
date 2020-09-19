import { FILTER_UPDATE } from '../helpers/help';

const mainFilter = (state = 'market_cap_desc', action) => {
  switch (action.type) {
    case FILTER_UPDATE:
      // eslint-disable-next-line
      return action.filter
      break 
      
    default:
      return state;
  }
};

export default mainFilter;