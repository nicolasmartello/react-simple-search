import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Card from '../../components/Card';
import actions from '../../actions';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: this.props.list,
    };
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps.list });
  }

  addToFavorites(item) {
    this.props.addItem(item);
  }

  render() {
    return (
      <div className="list__container">
        {(
          this.state.list.map(item => (
            <div key={`list_${item.id}`} className="list__item">
              <Card
                srcImage={item.images.fixed_height.url}
                link={item.embed_url}
                isInFavorites={item.is_in_favorites}
                title={item.title}
                onItemSelected={this.addToFavorites}
                iconItemSelected="add_circle_outline"
                itemSelected={item}
                action="add"
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ list: state.list.result }),
  dispatch => ({
    addItem: (item) => {
      dispatch(actions.List.updateGifList(item));
      dispatch(actions.Favorites.addItemToFavorites(item));
    },
  }),
)(List);
