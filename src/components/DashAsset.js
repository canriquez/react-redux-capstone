import React from 'react';
import { PropTypes } from 'prop-types';

const DashAsset = ({
  asset,
}) => (

    <li key={asset.id}>
      <i><img className="asset-icon" src={asset.image} alt={asset.name} /></i>
      <h2>{asset.id}</h2>
      <h3>{asset.market_cap}</h3>
      <h4>{asset.symbol}</h4>
    </li>
  );

DashAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashAsset;
