import React from 'react';


const AssetDetails = (props) => {

    console.log("asset is");
    console.log(props.location.asset)
    const { asset } = props.location
    const ppthyShow = [
        'market_cap', 'symbol',
        'ath', 'high_24h',
        'low_24h', 'total_volume'
    ]

    const buildDetailsArray = (asset, conf) => {
        return Object.keys(asset)
            .filter(key => conf.includes(key))
            .reduce((obj, key) => {
                obj[key] = asset[key];
                return obj;
            }, {});
    }

    console.log(buildDetailsArray(asset, ppthyShow))

    return (

        <div className="main-asset">


            <h2>{asset.market_cap}</h2>
            <h3>{asset.symbol}</h3>

            <h3>{asset.ath}</h3>
            <h3>{asset.high_24h}</h3>
            <h3>{asset.low_24h}</h3>
            <h3>{asset.total_volume}</h3>

            <div className="head-info">
                <i><img src={asset.image} alt={asset.name} /></i>
                <h1>{asset.id}</h1>
                <h3>{asset.curent_price}</h3>
            </div>
            <div className="asset-divider">
                <p>|--- Top Down Market Cap Assets ---|</p>
            </div>
            <ul>

            </ul>



        </div>
    );
};

export default AssetDetails;