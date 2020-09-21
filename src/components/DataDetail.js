import React from 'react';
import { PropTypes } from 'prop-types';

const DataDetail = ({
    data,
}) => (
        <div className="data-detail">
            <p>{data.key}</p>
            <p>{data.value}</p>
        </div>
    );

DataDetail.propTypes = {
    data: PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
};

export default DataDetail;