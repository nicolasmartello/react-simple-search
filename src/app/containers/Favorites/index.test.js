import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../../store';

import Favorites from './index';

const store = configureStore();

describe('Favorites Container', () => {
  const favorites = shallow(<Favorites store={store} />).dive();

  it('should render correctly', () => {
    expect(favorites.find('div').length).toEqual(2);
  });

});
