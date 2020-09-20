import React from 'react';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import { connect } from 'react-redux';
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
})

const sortAssetsList = (object, property) => {
    console.log('attempt sorting ..');
    return object.sort((a, b) => b[property] - a[property])
}


const renderDashBoard = ({
    state,
    changeMainFilter,
    changeCurrencyFilter
}) => {

    const sortedAssetList = sortAssetsList(state.crypto, state.mainFilter)

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