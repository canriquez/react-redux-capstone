import React from 'react';
import { connect } from 'react-redux';
import DataDetail from '../components/DataDetail'
import { Link } from 'react-router-dom'


const AssetDetailsSafe = ({
    match,
    currentCryptoList,
    currencyFilter
}) => {

    const asset = currentCryptoList.find(asset => asset.id == match.match.params.id);
    let assetRender;
    if (asset) {
        const showData = [
            { 'Market Cap': asset.market_cap },
            { 'Symbol': asset.symbol },
            {
                'ath': asset.ath,
                'ath_date': asset.ath_date
            },
            { 'Low 24h': asset.low_24h },
            { 'High 24h': asset.high_24h },
            { 'Total Volume': asset.total_volume }
        ]
        assetRender = (
            <React.Fragment>
                <Link to={{
                    pathname: '/'
                }}>
                    <p>BACK</p>
                </Link>

                <div className="header-details">
                    <p>{currencyFilter}</p>
                </div>

                <div className="head-info">
                    <i><img src={asset.image} alt={asset.name} /></i>
                    <h1>{asset.id}</h1>
                    <h3>{asset.curent_price}</h3>
                </div>
                <div className="asset-divider">
                    <p>|--- Top Down Market Cap Assets ---|</p>
                </div>
                <ul>{
                    showData.map((data, id) => {
                        return (
                            <DataDetail key={id * 2} data={data} />
                        )
                    })
                }
                </ul>
            </React.Fragment>
        );
    }
    else assetRender = <h2> ....loading </h2>;

    return (
        <div className="asset-details-box">
            {assetRender}
        </div>
    );
};


const mapStateToProps = (state, match) => ({
    currentCryptoList: state.crypto,
    currencyFilter: state.currencyFilter,
    match
});

export default connect(mapStateToProps, null)(AssetDetailsSafe);