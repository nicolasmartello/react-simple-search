import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SearchBox extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
    
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEnterSendSearch = this.onEnterSendSearch.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onClick(this.state.value);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onEnterSendSearch(event) {
    if (event.key === 'Enter' && this.state.value.trim() !== '') {
      this.props.onClick(this.state.value);
    }
  }

  render() {
    return (
      <div className="search__container">
        <input
          type="text"
          value={this.state.value}
          placeholder="type your search"
          onChange={this.onChange}
          onKeyPress={this.onEnterSendSearch}
        />
        <button type="button" className="button--icon" onClick={this.onClick}>
          <i className="material-icons">search</i>
        </button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchBox;
