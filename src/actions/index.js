import { 
    UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET,
    FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE, 
    } from '../helpers/help'

/* Actions for Sync Store */
const updateAssetList = assetList => ({
    type: UPDATE_ASSET_LIST,
    assetList
});

const updateCryptoAsset = assetData => ({
    type: UPDATE_CRYPTO_ASSET,
    assetData
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


export { 
    updateAssetList, updateCryptoAsset, 
    fetchApiAssets, fetchApiSuccess, fetchApiFailure,
    }