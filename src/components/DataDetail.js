import React from 'react';
import { PropTypes } from 'prop-types';
import { getDate, isEven, textToBigCurrency } from '../helpers/componentHelp';
import style from '../styles/DataDetail.module.css';

const DataDetail = ({
  data,
  idRow,
}) => {
  let k2; let
    v1;

  const keys = Object.keys(data);
  if (keys.length > 1) {
    v1 = data[keys[0]];
    k2 = getDate(data[keys[1]]); // handles ath date
  } else {
    v1 = data[keys[0]];
    k2 = null;
  }

  return (
    <div className={style.dataDetailRow
      + (isEven(idRow) ? ` ${style.evenBox}` : ` ${style.oddBox}`)}
    >
      <div className={style.detailKeys}>
        <p>{keys[0]}</p>
        {keys[1] === null ? '' : <p>{k2}</p>}
      </div>
      <div className={style.detailValue}>
        {keys[0] === 'Market Cap'
          ? <p>{textToBigCurrency(v1)}</p>
          : <p>{v1}</p>}
      </div>
    </div>
  );
};

DataDetail.propTypes = {
  data: PropTypes.shape({
    'Market Cap': PropTypes.number,
    Symbol: PropTypes.string,
    ath: PropTypes.number,
    ath_date: PropTypes.string,
    'Low 24h': PropTypes.number,
    'High 24h': PropTypes.number,
    'Total Volume': PropTypes.number,
  }).isRequired,
  idRow: PropTypes.number.isRequired,
};

export default DataDetail;
