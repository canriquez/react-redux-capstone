import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashBoard from '../container/DashBoard';
import { updateApiRenderList } from '../actions/index';
import AssetDetailsSafe from '../container/AssetDetailsSafe'
import styles from '../styles/App.module.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    const { renderApiAssetsLists, currentCryptoList, currencyFilter } = props;

    this.currencyFilter = currencyFilter;
    this.currentCryptoList = currentCryptoList;
    this.renderApiAssetsLists = renderApiAssetsLists;
    // binding dispatchToProps method so is accesible by class methods
    this.renderApiAssetsLists = this.renderApiAssetsLists.bind(this);

  }

  // Initial conf will be the initial state of a store reducer where we will update the
  // selected filters
  // API will be only called if currency has changed

  componentDidMount() {
    this.renderApiAssetsLists();
    console.log('App just mounted, and got a fresh list of assets');
    // Fix normal update every 10 minutes
    this.assetsListUpdateInterval = setInterval(this.fetchApi.bind(this), 600000);

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
    console.log(this.match);
    return (
      <Router>
        <div className={styles.appContainer}>
          <h1 className={styles.brand}>CryptoLog</h1>
          <Switch>
            <Route exact path='/' component={DashBoard} />
            {/*          <Route exact path='/asset' component={AssetDetails} /> */}
            <Route
              path={`/asset/:id`}
              render={(props) => <AssetDetailsSafe currency={this.currencyFilter} data={this.currentCryptoList} {...props} />}
            />
            <Route
              path={'/*'}
              render={(props) => <Redirect to='/' />}
            />


          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  renderApiAssetsLists: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  renderApiAssetsLists: () => dispatch(updateApiRenderList()),
});
const mapStateToProps = (state, match) => ({
  currentCryptoList: state.crypto,
  currencyFilter: state.currencyFilter,
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
