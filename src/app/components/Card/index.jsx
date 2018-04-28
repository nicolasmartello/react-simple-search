import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      favoriteLabel: '',
      showAddButton: true,
      showHeart: true,
      hiddenSpinner: '',
      showImage: '',
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.onFinihsLoadGif = this.onFinihsLoadGif.bind(this);
  }
  
  componentWillMount() {
    this.setState({
      favoriteLabel: this.props.isInFavorites ? 'favorite' : 'favorite_border',
      showAddButton: !(this.props.isInFavorites && this.props.action === 'add'),
      showHeart: this.props.action === 'add',
    });
  }

  onItemClick(item) {
    this.setState({
      favoriteLabel: 'favorite',
      showAddButton: false
    });
    this.props.onItemSelected(this.props.itemSelected);
  }

  onFinihsLoadGif() {
    this.setState({
      hiddenSpinner: 'hidden',
      showImage: 'show',
    });
  }

  render() {
    return (
      <div className="card__wrapper">
        <div className="card__actions">
          { this.state.showAddButton && (
            <button className="button--icon" onClick={this.onItemClick}>
              <i className="material-icons">{this.props.iconItemSelected}</i>
            </button>
          )}
          <a href={this.props.link} target="_blank">
            <i className="material-icons">open_in_new</i>
          </a>
          {this.state.showHeart && 
          (<i className="material-icons">{this.state.favoriteLabel}</i>)}
          
        </div>
        <div className="card__container">
          <div className={`icon--container ${this.state.hiddenSpinner}`}><i className="material-icons spinner" >toys</i></div>
          <img
            src={this.props.srcImage}
            alt={this.props.title}
            onLoad={this.onFinihsLoadGif}
            className={this.state.showImage}
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  srcImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isInFavorites: PropTypes.bool.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  iconItemSelected: PropTypes.string.isRequired,
  itemSelected: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
};

export default Card;
