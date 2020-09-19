import React from 'react';
import DashBoard from '../container/DashBoard'
import { connect } from 'react-redux';
import { updateApiRenderList } from '../actions/index';

const App = ({
    renderApiAssetsLists
}) => {

const initialConf = {
    url:null,  
    currency:'usd',
    filter:'market_cap_desc',
    results:'5',
    page:'1'
}

renderApiAssetsLists(initialConf); //Updates root/home screen with fresh API assets values.
return (
    <>
        <div>
            <h1>Crypto Catalog App</h1>
        </div>
        <DashBoard />
    </>
)
};

const mapDispatchToProps = dispatch => ({
  renderApiAssetsLists: (conf) => dispatch(updateApiRenderList(conf)),
});


export default connect(null, mapDispatchToProps)(App);
