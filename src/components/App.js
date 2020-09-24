import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import DashBoard from '../container/DashBoard';
import { updateApiRenderList } from '../actions/index';
import AssetDetailsSafe from '../container/AssetDetailsSafe';
import styles from '../styles/App.module.css';

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
    this.renderApiAssetsLists();
  }

  render() {
    return (
      <Router>
        <div className={styles.appContainer}>
          <h1 className={styles.brand}>CryptoLog</h1>
          <a className={styles.myBrand} href="https://www.carlosanriquez.com">
            <img src="https://img.shields.io/badge/Developed%20by-Carlos%20Anriquez-red" alt="carlos anriquez" />
          </a>
          <a className={styles.myRepo} href="https://github.com/canriquez/react-redux-capstone">
            <img src="https://img.shields.io/badge/Github-Repo-green" alt="repo" />
          </a>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            {/*          <Route exact path='/asset' component={AssetDetails} /> */}
            <Route
              path="/asset/:id"
              render={props => (
                <AssetDetailsSafe
                  currency={this.currencyFilter}
                  data={this.currentCryptoList}
                  // eslint-disable-next-line
                  {...props}
                />
              )}
            />
            <Route
              path={'/*'}
              render={() => <Redirect to="/" />}
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
const mapStateToProps = state => ({
  currentCryptoList: state.crypto,
  currencyFilter: state.currencyFilter,
});

App.propTypes = {
  currencyFilter: PropTypes.string.isRequired,
  currentCryptoList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
