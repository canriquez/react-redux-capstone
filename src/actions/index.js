import { 
    UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET,
    FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE, 
    NEXT_PAGE, PREV_PAGE,
    FILTER_UPDATE
    } from '../helpers/help'

import { fetchApiCryptoList } from '../apis/coingecko';

/* Actions for Sync Store */
const updateAssetList = assetList => ({
    type: UPDATE_ASSET_LIST,
    assetList
});

const updateCryptoAsset = assetData => ({
    type: UPDATE_CRYPTO_ASSET,
    assetData
});

/* home page - crypto page turner */

const nextPage = ()=>({
    type: NEXT_PAGE,
});

const prevPage = ()=>({
    type: PREV_PAGE,
});

/*  home page - Filter update */

const filterUpdate = (filter)=>({
    type: FILTER_UPDATE,
    filter: filter
});

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

const updateApiRenderList = (config) => (dispatch,state) => {
  fetchApiCryptoList(config).then(result => {
    dispatch(updateAssetList(result));
  });
};


export { 
    updateAssetList, updateCryptoAsset, 
    nextPage, prevPage,
    fetchApiAssets, fetchApiSuccess, fetchApiFailure,
    updateApiRenderList,
    filterUpdate
    }