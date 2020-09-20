import { NEXT_PAGE, PREV_PAGE, UPDATE_PAGE } from '../helpers/help';

const page = (state = 1, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      // eslint-disable-next-line
      if (state === 40) { return 40 }
      if (state < 40) { return state + 1 }
      break

    case PREV_PAGE:
      // eslint-disable-next-line
      if (state === 1) { return 1 }
      if (state > 1) { return state - 1 }
      break

    case UPDATE_PAGE:
      // eslint-disable-next-line
      if (action.page >= 1 && action.page <= 40) { return action.page }
      return state

    default:
      return state;
  }
};

export default page;