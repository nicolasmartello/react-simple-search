import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../../store';

import List from './index';

const store = configureStore();

describe('List Container', () => {
  const list = shallow(<List store={store} />).dive();

  it('should render correctly', () => {
    expect(list.find('div').length).toEqual(1);
  });

});