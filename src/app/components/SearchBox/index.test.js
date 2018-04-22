import React from 'react';
import { describe, it, expect } from 'jest';
import { render } from 'enzyme';

import SearchBox from './index';

describe('SearchBox Component', () => {
  it('should render with a default function', () => {
    const searchBox = render(<Searchbox  onClick={() => {}} />);
    expect(searchBox.find('input').eq(0).attr('value').length).toBeGreaterThan(0);
  });

  it('should NOT render status if the prop is missing', () => {
    const searchBox = render(<Searchbox  />);
    expect(searchBox.find('input').eq(0).attr('value')).toBeUndefined();
  });

});
