import deepFreeze from 'deep-freeze';
import crypto from '../reducers/crypto';
import { UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET } from '../helpers/help'
import { updateAssetList } from '../actions/index'

it('updates crypto asset list', () => {
  const stateBefore = [];
  const assets = [{
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  }
  ];

  const stateAfter = [{
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  }
  ];

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(updateAssetList); // makes sure reducer is pure function

  expect(
    crypto(stateBefore, updateAssetList(assets)),
  ).toEqual(stateAfter);
});