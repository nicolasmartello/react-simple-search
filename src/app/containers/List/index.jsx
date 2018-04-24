import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import Card from '../../components/Card';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: this.props.list,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps.list });
  }

  render() {
    return (
      <div className="list__container">
        {(
          this.state.list.map(item => (
            <div key={item.id} className="list__item">
              <Card
                srcImage={item.images.fixed_height_still.url}
                link={item.embed_url}
                isInFavorites={item.isInFavorites}
                title={item.title}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default connect(state => ({ list: state.list.result }), null)(List);
