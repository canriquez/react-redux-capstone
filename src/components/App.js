import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import DashBoard from '../container/DashBoard';
import { updateApiRenderList } from '../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { renderApiAssetsLists } = props;

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
    return (
      <>
        <div>
          <h1>Crypto Catalog App</h1>
        </div>
        <DashBoard />
      </>
    );
  }
}

App.propTypes = {
  renderApiAssetsLists: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  renderApiAssetsLists: () => dispatch(updateApiRenderList()),
});

export default connect(null, mapDispatchToProps)(App);
