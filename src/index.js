import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Main />, document.getElementById('root'));
