import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import DataDetail from '../components/DataDetail';
import style from '../styles/AssetDetailsSafe.module.css';
import { textToBigCurrency } from '../helpers/componentHelp';
import { ReactComponent as GoBack } from '../assets/icons/pagePrev.svg';

const AssetDetailsSafe = ({
  match,
  currentCryptoList,
  currencyFilter,
}) => {
  const asset = currentCryptoList.find(asset => asset.id === match.match.params.id);
  let assetRender;
  if (asset) {
    const showData = [
      { 'Market Cap': asset.market_cap },
      { Symbol: asset.symbol },
      {
        ath: asset.ath,
        ath_date: asset.ath_date,
      },
      { 'Low 24h': asset.low_24h },
      { 'High 24h': asset.high_24h },
      { 'Total Volume': asset.total_volume },
    ];
    assetRender = (
      <>
        <Link to={{
          pathname: '/',
        }}
        >
          <GoBack className={style.goBack} />
        </Link>
        <div className={style.mainAsset}>
          <div className={`${style.leftBox} flexCenter`}>
            <img src={asset.image} alt={asset.name} />
          </div>
          <div className={`${style.rightBox} flexCol`}>
            <h1>{asset.id}</h1>
            <div className={style.marketCap}>
              <h2>{`${textToBigCurrency(asset.current_price)} `}</h2>
              <span>{currencyFilter}</span>
            </div>
          </div>
        </div>
        <div className={style.dashGap}>
          <p>
            Crypto currency details | ticker:
            {asset.symbol}
          </p>
        </div>
        <ul>
          {
            showData.map((data, id) => (
              // eslint-disable-next-line
              <DataDetail idRow={id} key={id * 2} data={data} />
            ))
          }
        </ul>
      </>
    );
  } else {
    assetRender = <Redirect to="/" />;
  }

  return (
    <div className="asset-details-box">
      {assetRender}
    </div>
  );
};

const mapStateToProps = (state, match) => ({
  currentCryptoList: state.crypto,
  currencyFilter: state.currencyFilter,
  match,
});

AssetDetailsSafe.propTypes = {
  /*   match: PropTypes.string.isRequired,
    cmatch: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired, */
  currentCryptoList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  currencyFilter: PropTypes.string.isRequired,
  match: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    staticContext: PropTypes.string,
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      path: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, null)(AssetDetailsSafe);
