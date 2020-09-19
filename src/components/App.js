import React from 'react';
import DashBoard from '../container/DashBoard'
import { connect } from 'react-redux';
import { updateApiRenderList } from '../actions/index';

class App extends React.Component {
    constructor (props){
        super(props)
        
        const { state, renderApiAssetsLists } = props
        this.state = state
        this.renderApiAssetsLists = renderApiAssetsLists
        this.renderApiAssetsLists = this.renderApiAssetsLists.bind(this);

    
    }

//Initial conf will be the initial state of a store reducer where we will update the 
// selected filters
// API will be only called if currency has changed

    componentDidMount() {

        const initialConf = {
            url:null,  
            currency:'usd',
            filter:this.state.mainFilter,
            results:'200',
            page:'1'
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
