import React from 'react';
import { connect } from 'react-redux';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import Paginator from '../components/Paginator';
import {
    nextPage, prevPage, updatePage,
    filterUpdate,
    updateApiRenderList,
    currencyUpdate,
} from '../actions/index';

const mapStateToProps = state => ({
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
    let keysearch = [];
    const [input, setInput] = React.useState('');
    const [ks, setKs] = React.useState([{ name: '', idpos: null }]);

    const handleKeySearch = inputValue => {
        if (input.length < 2) { return []; }
        // first we add idpos to the original asset object as a new property
        // then we filter based on partial user input
        // to finally select the name and calculate the page number
        // where the crypto asset is located. We limit the result size to 4 max
        keysearch = state.crypto.map((obj, idpos) => ({ ...obj, idpos }))
            .filter(asset => (asset.name.substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()))
            .map(obj => ({ name: obj.name, idpage: (Math.trunc(obj.idpos / 5) + 1) }));
        // limits to maximum 4 results
        return keysearch.slice(0, (keysearch.length >= 5 ? 4 : keysearch.length));
    };

    React.useEffect(() => {

    });

    const handleInputSearch = event => {
        setInput(event.target.value);
        const hits = handleKeySearch(event.target.value);
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
                                <option key={`hint-${id}`}>{hint.name}</option>
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
                <MainAsset
                    asset={sortedAssetList[0]}
                />

                <div>
                    <p>|--- Top Down Market Cap Assets ---|</p>
                    <Paginator handlePaginator={handlePaginator} />
                </div>
                <ul>
                    {
                        sortedAssetList.map((asset, id) => (
                            id !== 0
                                ? (
                                    <DashAsset
                                        key={asset.id}
                                        asset={asset}
                                    />
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

export default DashBoard;
