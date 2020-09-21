import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

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

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    screen.getByText('Crypto Catalog App');
  });
});
