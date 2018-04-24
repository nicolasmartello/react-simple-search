import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import GiphyApi from '../../api/giphy';
import actions from '../../actions';
import SearchBox from '../../components/SearchBox';
import Favorites from '../Favorites';

const Giphy = new GiphyApi();

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
  }

  onClick(filterBy) {
    this.props.search(filterBy);
  }

  render() {
    return (
      <section className="header">
        <SearchBox onClick={this.onClick} />
        <Favorites />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: (filterBy) => {
    Giphy.get(filterBy).then((result) => {
      const data = result.data.data;
      dispatch(actions.List.loadGifList(data));
    }).catch((error) => {
      // TODO dispacth error
      console.log(error);
    });
  },
});

export default connect(null, mapDispatchToProps)(Header);
