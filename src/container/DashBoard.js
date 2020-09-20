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
    const to = (itemsPerPage * page)
    return object.sort((a, b) => b[property] - a[property]).slice(from, to)
}

//Using React Hooks
const RenderDashBoard = ({
    state,
    changeMainFilter,
    changeCurrencyFilter,
    handlePaginator
}) => {

    let keysearch = [];
    const [input, setInput] = React.useState('');
    const [ks, setKs] = React.useState([{ name: '', idpos: null }]);

    const handleKeySearch = (inputValue) => {
        if (input.length < 2) { return [] }
        keysearch = state.crypto.map((obj, idpos) => ({ ...obj, idpos })).filter((asset) =>
            /* asset.name.toLowerCase().startsWith(inputValue.toLowerCase()) */
            /* new RegExp('^' + inputValue, 'i').test(asset.name) */
            (asset.name.substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase())
        ).map(obj => ({ name: obj.name, idpos: obj.idpos }));
        //limits to maximum 4 results
        return keysearch.slice(0, (keysearch.length >= 5 ? 4 : keysearch.length));
    }

    React.useEffect(() => {

    })

    const handleInputSearch = (event) => {
        setInput(event.target.value)
        setKs(handleKeySearch(event.target.value));
        console.log(event.target.value);
        console.log(keysearch)
    }

    const sortedAssetList = sortAssetsList(state.crypto, state.page, state.mainFilter)

    return (
        <>
            <div>
                <div>
                    <input type="text" value={input} list="keysearch" onChange={handleInputSearch} />
                    <datalist id="keysearch">
                        {
                            ks.map((hint) => {
                                return (
                                    <option key={hint.idpos}>{hint.name}</option>
                                )
                            })
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
)(RenderDashBoard);

export default DashBoard;