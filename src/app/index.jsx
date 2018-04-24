import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store';
import './styles.scss';
import Main from './containers/Main';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);

module.hot.accept();
