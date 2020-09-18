import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

class Main extends React.Component {
  componentDidMount() {
    document.title = 'Crypto Catalog App';
  }

  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
