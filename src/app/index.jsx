import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles.scss';

import Main from './containers/Main';

ReactDOM.render(
    <Main />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);

module.hot.accept();
