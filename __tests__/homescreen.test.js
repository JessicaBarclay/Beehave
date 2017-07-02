import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../src/screens/Home';
import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('renders a home page', () => {
    const homepage = renderer.create(<Home/>).toJSON();
    expect(homepage).toMatchSnapshot();
  });

  it('should have a greeting', () => {
    expect(render(<Home />).text()).toContain('Hi, welcome to BeeAppy');
  });

  it('should have a Bee button', () => {
    expect(render(<Home />).text()).toContain('BeeButton');
  });
});
