import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Card from '../../components/Card';
import actions from '../../actions';

class Favorites extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: this.props.favorites.list,
    };
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.favorites.list });
  }

  removeFromFavorites(item) {
    this.props.removeItem(item);
  }

  render() {
    return (
      <div className="favorites__wrapper">
        <div className="favorites__container">
          {(
            this.state.items.map(item => (
              <div
                key={`favorites_${item.id}`}
                aria-hidden
              >
                <Card
                  srcImage={item.images.fixed_height_small.url}
                  link={item.embed_url}
                  title={item.title}
                  isInFavorites={item.is_in_favorites}
                  onItemSelected={this.removeFromFavorites}
                  iconItemSelected="remove_circle_outline"
                  itemSelected={item}
                  action="remove"
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
     
export default connect(
  state => ({ favorites: state.favorites }),
  dispatch => ({
    removeItem: (item) => {
      dispatch(actions.Favorites.removeItemFromFavorites(item));
      dispatch(actions.List.updateGifList(item));
    },
  }),
)(Favorites);
