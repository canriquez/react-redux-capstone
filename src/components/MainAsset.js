import React from 'react';
import { PropTypes } from 'prop-types';

const MainAsset = ({
  asset,
}) => (

  <div className="main-asset">
    <i><img src={asset.image} alt={asset.name} /></i>
    <h1>{asset.id}</h1>
    <h2>{asset.market_cap}</h2>
    <h3>{asset.symbol}</h3>
  </div>
);

MainAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainAsset;
