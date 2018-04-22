import React from 'react';
import './styles.scss';

import Data from '../Favorites/data.json';

import Card from '../../components/Card';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      gifList: Data,
    };
  }

  componentDidMount() {
    // TODO: call list of gifts with limit 10
  }

  render() {
    return (
      <div className="list__container">
        {(
          this.state.gifList.map(item => (
            <div className="list__item">
              <Card
                srcImage={item.images.fixed_height_still.url}
                link={item.embed_url}
                title={item.title}
                isInFavorites={item.isInFavorites}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default List;
