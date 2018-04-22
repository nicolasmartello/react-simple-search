import React from 'react';
import './styles.scss';

import Card from '../../components/Card';
import Data from './data.json';

class Favorites extends React.Component {
  constructor(props, context) {
    super(props, context);

    // TODO: connect with redux and subsribe to favorite-list
    this.state = {
      favoritesList: Data,
    };
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  removeFromFavorites(itemId) {
    // TODO: dispach action
  }

  render() {
    return (
      <div className="favorites__wrapper">
        <div className="favorites__container">
          {(
            this.state.favoritesList.map(item => (
              <div
                key={item.id}
                onClick={this.removeFromFavorites(item.id)}
                aria-hidden
              >
                <Card
                  srcImage={item.images.fixed_width_small_still.url}
                  link={item.embed_url}
                  title={item.title}
                  isInFavorites={item.isInFavorites}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
