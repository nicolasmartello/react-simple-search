import React from 'react';
import './styles.scss';

import Header from '../Header';
import List from '../List';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default Main;
