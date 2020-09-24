import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/MainAsset.module.css';
import { textToBigCurrency } from '../helpers/componentHelp';

const MainAsset = ({
  asset,
  currency,
}) => (

  <div className={style.mainAsset}>
    <div className={`${style.leftBox} flexCenter`}>
      <img src={asset.image} alt={asset.name} />
      <a className={style.myBrand} href="https://www.carlosanriquez.com">
        <img src="https://img.shields.io/badge/Developed%20by-Carlos%20Anriquez-red" alt="carlos anriquez" />
      </a>
    </div>
    <div className={`${style.rightBox} flexCol`}>
      <h1>{asset.id}</h1>
      <div className={style.marketCap}>
        <h2>{`${textToBigCurrency(asset.market_cap)} `}</h2>
        <span>{currency}</span>
      </div>
      <h2>{asset.symbol}</h2>
      <a className={style.myRepo} href="https://github.com/canriquez/react-redux-capstone">
        <img src="https://img.shields.io/badge/Github-Repo-green" alt="repo" />
      </a>
    </div>
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
  currency: PropTypes.string.isRequired,
};

export default MainAsset;
