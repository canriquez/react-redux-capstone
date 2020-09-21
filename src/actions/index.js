import {
  UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET,
  FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE,
  NEXT_PAGE, PREV_PAGE, UPDATE_PAGE,
  FILTER_UPDATE,
  CURRENCY_UPDATE,
  GET_CURRENT_CURRENCY,
} from '../helpers/help';

import { fetchApiCryptoList } from '../apis/coingecko';

/* Actions for Sync Store */
const updateAssetList = assetList => ({
  type: UPDATE_ASSET_LIST,
  assetList,
});

const updateCryptoAsset = assetData => ({
  type: UPDATE_CRYPTO_ASSET,
  assetData,
});

/* home page - crypto page turner */

const nextPage = () => ({
  type: NEXT_PAGE,
});

const prevPage = () => ({
  type: PREV_PAGE,
});

const updatePage = newPage => (
  {
    type: UPDATE_PAGE,
    page: newPage,
  }
);

/*  home page - Filter update */

const filterUpdate = filter => {
  console.log(`in action creator... filter is now :${filter}`);
  return ({
    type: FILTER_UPDATE,
    filter,
  });
};

/* Home page - currency update */

const currencyUpdate = filter => {
  console.log(`in action creator ... currency is now :${filter}`);
  return ({
    type: CURRENCY_UPDATE,
    filter,
  });
};

/* Home Page Get Current Currency */

const getCurrenCurrency = () => {
  console.log('getting redux store current currency...');
  return ({
    type: GET_CURRENT_CURRENCY,
  });
};

/* Actions for Async driven Api Store */

const fetchApiAssets = () => ({
  type: FETCHING_API_ASSETS,
});

const fetchApiSuccess = () => ({
  type: FETCHING_API_SUCCESS,
});

const fetchApiFailure = () => ({
  type: FETCHING_API_FAILURE,
});

/* Thunk thenable creators to manage Async requests (Crypto API) */

const updateApiRenderList = config => (dispatch, getState) => fetchApiCryptoList(
  {
    url: null,
    currency: getState().currencyFilter,
  },
)
  .then(result => {
    dispatch(updateAssetList(result));
  }).catch(error => {
    throw (error);
  });

export {
  updateAssetList, updateCryptoAsset,
  nextPage, prevPage, updatePage,
  fetchApiAssets, fetchApiSuccess, fetchApiFailure,
  updateApiRenderList,
  filterUpdate,
  currencyUpdate,
  getCurrenCurrency,
};
