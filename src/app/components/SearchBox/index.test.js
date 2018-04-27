import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './index';

describe('SearchBox Component', () => {
  const searchBox = shallow(<SearchBox  onClick={() => {}} />);

  it('should have an input element', () => {
    expect(searchBox.find('input').length).toEqual(1);
  });

  it('should have an button element', () => {
    expect(searchBox.find('button').length).toEqual(1);
  });

  it('should have an icon element', () => {
    expect(searchBox.find('i').length).toEqual(1);
  });
  
});
