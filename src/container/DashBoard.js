import React from 'react';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import { connect } from 'react-redux';
import Paginator from '../components/Paginator'
import { nextPage, prevPage } from '../actions/index'
import {
    filterUpdate,
    updateApiRenderList,
    currencyUpdate
} from '../actions/index'


const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    changeMainFilter: (filter) => dispatch(filterUpdate(filter)),
    changeCurrencyFilter: (filter) => {
        dispatch(currencyUpdate(filter));
        dispatch(updateApiRenderList());
    },
    handlePaginator: (action) => {
        if (action === 'NEXT') { dispatch(nextPage()) }
        if (action === 'PREV') { dispatch(prevPage()) }
    }
})

const sortAssetsList = (object, page, property) => {
    console.log('attempt sorting ..');
    const itemsPerPage = 5;
    const from = (itemsPerPage * page) - itemsPerPage;
    const to = (itemsPerPage * page) - 1
    return object.sort((a, b) => b[property] - a[property]).slice(from, to)
}


const renderDashBoard = ({
    state,
    changeMainFilter,
    changeCurrencyFilter,
    handlePaginator
}) => {

    const sortedAssetList = sortAssetsList(state.crypto, state.page, state.mainFilter)

    return (
        <>
            <div>
                <MainFilter
                    changeMainFilter={changeMainFilter}
                />
                <CurrencyFilter
                    state={state}
                    changeCurrencyFilter={changeCurrencyFilter}
                />

                <div>
                    <p>Currency: {state.currencyFilter}</p>
                </div>
                <MainAsset
                    asset={sortedAssetList[0]}
                />

                <div>
                    <p>|--- Top Down Market Cap Assets ---|</p>
                    <Paginator handlePaginator={handlePaginator} />
                </div>
                <ul>
                    {
                        sortedAssetList.map((asset, id) => {
                            return (
                                id !== 0 ?
                                    <DashAsset
                                        key={asset.id}
                                        asset={asset}
                                    />
                                    : ''
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

const DashBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(renderDashBoard);

export default DashBoard;