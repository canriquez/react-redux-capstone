import React from 'react';

const MainAsset = ({
    asset
}) => (

        <li>
            <i><img src={asset.image} alt={asset.name}/></i>
            <h1>{asset.id}</h1>
            <h2>{asset.market_cap}</h2>
            <h3>{asset.symbol}</h3>
        </li>
);

export default MainAsset;
