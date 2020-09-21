import React from 'react';

const DashAsset = ({
  asset,
}) => (

  <li>

    <i><img className="asset-icon" src={asset.image} alt={asset.name} /></i>
    <h2>{asset.id}</h2>
    <h3>{asset.market_cap}</h3>
    <h4>{asset.symbol}</h4>
  </li>
);

export default DashAsset;
