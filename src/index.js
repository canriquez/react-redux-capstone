import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
/* 
class Main extends React.Component {
  componentDidMount() {
    document.title = 'Crypto Catalog App';
  }

  
} */

const Main = () => {

  React.useEffect(() => {
    document.title = 'Crypto Catalog App';
  })

  return (
    <App />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
