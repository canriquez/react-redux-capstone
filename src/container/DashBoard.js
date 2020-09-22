import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import Paginator from '../components/Paginator';
import { getInputHints } from '../helpers/componentHelp';
import { Link, Route } from 'react-router-dom'

import {
  nextPage, prevPage, updatePage,
  filterUpdate,
  updateApiRenderList,
  currencyUpdate,
} from '../actions/index';

const mapStateToProps = (state, match) => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  changeMainFilter: filter => dispatch(filterUpdate(filter)),
  changeCurrencyFilter: filter => {
    dispatch(currencyUpdate(filter));
    dispatch(updateApiRenderList());
  },
  handlePaginator: action => {
    if (action === 'NEXT') { dispatch(nextPage()); }
    if (action === 'PREV') { dispatch(prevPage()); }
  },
  changePage: newPage => dispatch(updatePage(newPage)),
});

const sortAssetsList = (object, page, property) => {
  console.log('attempt sorting ..');
  const itemsPerPage = 5;
  const from = (itemsPerPage * page) - itemsPerPage;
  const to = (itemsPerPage * page);
  return object.sort((a, b) => b[property] - a[property]).slice(from, to);
};

// Using React Hooks
const RenderDashBoard = ({
  state,
  changeMainFilter,
  changeCurrencyFilter,
  handlePaginator,
  changePage,
}) => {
  const keysearch = [];
  const [input, setInput] = React.useState('');
  const [ks, setKs] = React.useState([{ name: '', idpos: null }]);

  const handleInputSearch = event => {
    setInput(event.target.value);
    const hits = getInputHints(event.target.value, state.crypto);
    setKs(hits); // update store
    console.log(event.target.value);
    console.log(keysearch);
    if (hits.length > 0) {
      // calls method to change page store where the best hit asset is located.
      console.log(`ready to change to page : ${hits[0].idpage}`);
      changePage(hits[0].idpage);
    } else {
      console.log('back to page 0');
      changePage(1);
    }
  };

  const sortedAssetList = sortAssetsList(state.crypto, state.page, state.mainFilter);

  return (
    <>
      <div>
        <div>
          <input type="text" value={input} list="keysearch" onChange={handleInputSearch} />
          <datalist id="keysearch">
            {
              ks.map((hint, id) => (
                <option key={`hint-${id * 2}`}>{hint.name}</option>
              ))
            }
          </datalist>
        </div>
        <MainFilter
          changeMainFilter={changeMainFilter}
        />
        <CurrencyFilter
          state={state}
          changeCurrencyFilter={changeCurrencyFilter}
        />

        <div>
          <p>
            Currency:
            {state.currencyFilter}
          </p>
        </div>

        {/*         <Link key={0} to={{
          asset: sortedAssetList[0],
          currency: state.currencyFilter,
          pathname: '/asset'
        }}> */}

        <Link key={0}
          to={`/asset/${sortedAssetList[0].id}`}
        >
          <MainAsset
            asset={sortedAssetList[0]}
          />
        </Link>

        <div>
          <p>|--- Top Down Market Cap Assets ---|</p>
          <Paginator handlePaginator={handlePaginator} />
        </div>
        <ul>
          {
            sortedAssetList.map((asset, id) => (
              id !== 0
                ? (
                  <React.Fragment key={asset.id}>
                    <Link to={{
                      asset: asset,
                      currency: state.currencyFilter,
                      pathname: '/asset'
                    }}><p>Go</p>
                    </Link>
                    <DashAsset
                      asset={asset}
                    />
                  </React.Fragment>

                )
                : ''
            ))
          }
        </ul>
      </div>
    </>
  );
};

const DashBoard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderDashBoard);

RenderDashBoard.propTypes = {
  state: PropTypes.shape({
    crypto: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    page: PropTypes.number.isRequired,
    mainFilter: PropTypes.string.isRequired,
    currencyFilter: PropTypes.string.isRequired,
  }).isRequired,
  changeMainFilter: PropTypes.func.isRequired,
  changeCurrencyFilter: PropTypes.func.isRequired,
  handlePaginator: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default DashBoard;
