import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import GiphyApi from '../../api/giphy';
import actions from '../../actions';
import Header from '../Header';
import List from '../List';

const Giphy = new GiphyApi();

class Main extends React.Component {
  componentDidMount() {
    this.props.searchTrendingTopic();
  }
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchTrendingTopic: () => {
    Giphy.getTrendingTopic().then((result) => {
      const data = result.data.data;
      dispatch(actions.List.loadGifList(data));
    }).catch((error) => {
      // TODO dispatch error
      console.log(error);
    });
  },
});

export default connect(null, mapDispatchToProps)(Main);
