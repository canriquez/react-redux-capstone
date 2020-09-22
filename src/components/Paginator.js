/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/Paginator.module.css'
import { ReactComponent as PagePrev } from '../assets/icons/pagePrev.svg'
import { ReactComponent as PageNext } from '../assets/icons/pageNext.svg'

const Paginator = ({
  handlePaginator,
  page
}) => (
    <div className={style.paginator}>
      <a href="#" className="book-option middle-option" onClick={() => handlePaginator('PREV')}><PagePrev className={style.pageChange} /></a>
      <p>Page {page}{' '}/{' '}40</p>
      <a href="#" className="book-option middle-option" onClick={() => handlePaginator('NEXT')}><PageNext className={style.pageChange} /></a>
    </div>
  );

Paginator.propTypes = {
  handlePaginator: PropTypes.func.isRequired,
};

export default Paginator;
