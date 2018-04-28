import React from 'react';
import { shallow } from 'enzyme';

import Card from './index.jsx';

describe('Card component', () => {
  const props = {
    srcImage: "https://media2.giphy.com/media/jIzXYqaQ0nLkA/200_s.gif",
    link: "https://giphy.com/embed/jIzXYqaQ0nLkA",
    title: "adam west dancing GIF",
    isInFavorites: false,
    onItemSelected: () => {},
    iconItemSelected: "remove_circle_outline",
    itemSelected: {},
    action: "remove",
  };
  
  const card = shallow(<Card { ...props } />);

  it('Component should have an image element', () => {
    expect(card.find('img').length).toEqual(1);
  });

  it('Image should have the exact resource', () => {
    expect(card.find('img').prop('src')).toEqual(props.srcImage);
  });

  it('Component should have two icon elements', () => {
    expect(card.find('i').length).toEqual(3);
  });

  it('Component should have anchor element with url equal to prop', () => {
    expect(card.find('a').prop('href')).toEqual(props.link);  
  });

  it('Component should have a button', () => {
    expect(card.find('button').length).toEqual(1);
  });
});