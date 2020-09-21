import React from 'react';
import { getDate } from '../helpers/componentHelp'
import { PropTypes } from 'prop-types';

const DataDetail = ({
    data,
}) => {

    let k2, v1;

    const keys = Object.keys(data);
    if (keys.length > 1) {
        v1 = data[keys[0]];
        k2 = getDate(data[keys[1]]); //handles ath date
    } else {
        v1 = data[keys[0]];
        k2 = null;
    }


    return (
        <div className="data-detail">
            <div className="main-keys">
                <p>{keys[0]}</p>
                {keys[1] === null ? '' : <p>{k2}</p>}
            </div>
            <div className="main-value">
                <p>{v1}</p>
            </div>
        </div>
    );
};

DataDetail.propTypes = {
    data: PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
};

export default DataDetail;