import React from 'react';

const MainAsset = ({
    asset
}) => (

        <li>
            <i>asset icon</i>
            <h1>{asset.id}</h1>
            <h2>{asset.marketcap}</h2>
            <h3>{asset.currency}</h3>
        </li>
);

export default MainAsset;
