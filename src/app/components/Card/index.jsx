import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends React.PureComponent {
  render() {
    return (
      <div className="card__wrapper">
        <a className="card__container" href={this.props.link} target="_blank">
          {
            this.props.isInFavorites &&
            (<i className="material-icons">favorite</i>)
          }
          {
            !!this.isInFavorites &&
            (<i className="material-icons">favorite_border</i>)
          }
          <img src={this.props.srcImage} alt={this.props.title} />
        </a>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  isInFavorites: PropTypes.bool.isRequired,
  srcImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
