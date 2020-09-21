/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PropTypes } from 'prop-types';

const Paginator = ({
  handlePaginator,
}) => (
  <div className="paginator">
    <a href="#" className="book-option middle-option" onClick={() => handlePaginator('PREV')}><i>LA</i></a>
    <p>Page x/y</p>
    <a href="#" className="book-option middle-option" onClick={() => handlePaginator('NEXT')}><i>RA</i></a>
  </div>
);

Paginator.propTypes = {
  handlePaginator: PropTypes.func.isRequired,
};

export default Paginator;
