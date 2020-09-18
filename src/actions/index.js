import { UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET } from '../helpers/help'


const updateAssetList = assetList => ({
    type: UPDATE_ASSET_LIST,
    assetList
});

const updateCryptoAsset = assetData => ({
    type: UPDATE_CRYPTO_ASSET,
    assetData
});

export { updateAssetList, updateCryptoAsset }