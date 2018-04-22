import React from 'react';
import './styles.scss';

import SearchBox from '../../components/SearchBox';
import Favorites from '../Favorites';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchGif: (searchCriteria) => {
        // TODO: connect with service
      }
    };
  }

  render() {
    return (
      <section className="header">
        <SearchBox onClick={this.state.searchGif} />
        <Favorites />
      </section>
    );
  }
}

export default Header;
