import React from 'react';
import { describe, it, expect } from 'jest';
import { render } from 'enzyme';

import Favorites from './index';

describe('Favorites Container', () => {
  it('should render with a default function', () => {
    const favorites = render(<Favorites />);
    expect(true).tobe(true);
  });
});
