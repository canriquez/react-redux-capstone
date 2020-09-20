import React from 'react';
import DashBoard from '../container/DashBoard'
import { connect } from 'react-redux';
import { updateApiRenderList } from '../actions/index';

class App extends React.Component {
    constructor(props) {
        super(props)

        const { state, renderApiAssetsLists } = props
        this.reduxState = state
        this.renderApiAssetsLists = renderApiAssetsLists
        //binding render method so is accesible by class methods
        this.renderApiAssetsLists = this.renderApiAssetsLists.bind(this);

    }

    //Initial conf will be the initial state of a store reducer where we will update the 
    // selected filters
    // API will be only called if currency has changed
    assetsListUpdateInterval;

    componentDidMount() {

        const initialConf = {
            url: null,
            currency: 'usd',
            page: '1'
        }
        this.renderApiAssetsLists(initialConf);
        console.log('App just mounted, and got a fresh list of assets')
        //Fix normal update every 5 minutes
        this.assetsListUpdateInterval = setInterval(this.fetchApi.bind(this), 300000);
    }

    componentWillUnmount() {
        /*
          stop fetchAi() from keep updating list when changing pages
          on Unmount
        */
        clearInterval(this.assetsListUpdateInterval);
    }

    fetchApi() {
        console.log('Updating');
        const initialConf = {
            url: null,
            currency: 'usd',
            page: '1'
        }
        this.renderApiAssetsLists(initialConf);
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

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => ({
    renderApiAssetsLists: (conf) => dispatch(updateApiRenderList(conf)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
