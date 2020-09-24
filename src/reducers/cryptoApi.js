import {
  FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE,
} from '../helpers/help';

const defaultState = {
  fetching: false,
  updated: false,
  apiError: false,
  status: '',
};

const cryptoApi = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_API_ASSETS: // used to fetch the total book list
      return {
        fetching: true,
        updated: false,
        apiError: false,
        status: action.type,
      };

    case FETCHING_API_SUCCESS:
      return {
        fetching: false,
        updated: true,
        apiError: false,
        status: action.type,
      };
    case FETCHING_API_FAILURE: // Used to initiate a new book storage into API (POST Action)
      return {
        fetching: false,
        updated: false,
        apiError: true,
        status: action.type,
      };

    default:
      return state;
  }
};

export default cryptoApi;
