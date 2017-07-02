import React from 'react';
import render from 'enzyme';
import GeoMap from '../src/Home';
import BeeButton from '../src/BeeButton';

import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('renders a home page', () => {
    const homepage = renderer.create(<GeoMap/>).toJSON();
    expect(homepage).toMatchSnapshot();
  });
});
