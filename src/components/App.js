import React from 'react';
import DashBoard from '../container/DashBoard'
import { connect } from 'react-redux';
import { updateApiRenderList, getCurrenCurrency } from '../actions/index';

class App extends React.Component {
    constructor(props) {
        super(props)

        const { nowCurrency, renderApiAssetsLists, getReduxCurrency } = props
        this.nowCurrency = nowCurrency

        this.renderApiAssetsLists = renderApiAssetsLists
        this.getReduxCurrency = getReduxCurrency
        //binding dispatchToProps method so is accesible by class methods
        this.renderApiAssetsLists = this.renderApiAssetsLists.bind(this);
        this.getReduxCurrency = this.getReduxCurrency.bind(this)

        console.log('at App. this.nowCurrency is : ' + this.nowCurrency)

    }

    //Initial conf will be the initial state of a store reducer where we will update the 
    // selected filters
    // API will be only called if currency has changed
    assetsListUpdateInterval;

    componentDidMount() {

        this.renderApiAssetsLists();
        console.log('App just mounted, and got a fresh list of assets')
        //Fix normal update every 5 minutes
        this.assetsListUpdateInterval = setInterval(this.fetchApi.bind(this), 500000);
    }

    componentWillUnmount() {
        /*
          stop fetchAi() from keep updating list when changing pages
          on Unmount
        */
        clearInterval(this.assetsListUpdateInterval);
    }

    fetchApi() {
        console.log('running automatic update from App component...');
        this.renderApiAssetsLists();
    }


    render() {


        return (
            <>
                <div>
                    <h1>Crypto Catalog App</h1>
                </div>
                <DashBoard />
            </>
        )
    }

}

const mapStateToProps = state => {
    console.log('------- HERE STATE in APP ----');
    console.log(state)
    return ({
        nowCurrency: state.currencyFilter
    });
};
const mapDispatchToProps = dispatch => ({
    renderApiAssetsLists: () => dispatch(updateApiRenderList()),
    getReduxCurrency: () => dispatch(getCurrenCurrency())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
