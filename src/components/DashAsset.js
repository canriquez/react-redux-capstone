import React from 'react';

const DashAsset = ({
    asset
}) => (

        <li>
            <i>asset icon</i>
            <h2>{asset.id}</h2>
            <h3>{asset.marketcap}</h3>
            <h4>{asset.currency}</h4>
        </li>
);

export default DashAsset;
