import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/MainFilter.module.css';
import mainFilterCat from '../config/appConfig';

const MainFilter = ({
  changeMainFilter,
}) => {
  const handleChange = e => {
    changeMainFilter(e.target.value);
  };

  return (

    <div className={style.mainFilter}>
      <select className="categories" onChange={handleChange}>
        {
          mainFilterCat.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={cat.api}>{cat.key}</option>
          ))
        }
      </select>
    </div>
  );
};

MainFilter.propTypes = {
  changeMainFilter: PropTypes.func.isRequired,
};

export default MainFilter;
