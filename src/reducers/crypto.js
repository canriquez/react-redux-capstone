import { UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET } from '../helpers/help';
import cryptoDefault from './cryptoDefault';

const crypto = (state = cryptoDefault, action) => {
  switch (action.type) {
    case UPDATE_ASSET_LIST:
      // eslint-disable-next-line
      console.log(action.assetList);
      return [
        ...action.assetList,
      ];
    case UPDATE_CRYPTO_ASSET:
      // eslint-disable-next-line
      return {
        ...action.assetData,
      };
    default:
      return state;
  }
};

export default crypto;
