import React from 'react';
import { render } from 'enzyme';
import Donate from '../src/screens/Donate.js';
import renderer from 'react-test-renderer';

describe('Donate', () => {
  it('renders the page', () => {
    const donate = renderer.create(<Donate />).toJSON();
    expect(donate).toMatchSnapshot();
  });
  it('display links', () => {
    expect(render(<Donate />).text()).toContain('Bumblebee Conservation');
    expect(render(<Donate />).text()).toContain('Planet Bees');
    expect(render(<Donate />).text()).toContain('Adopt a Bumblebee');
  });

  it('should have a hyperlink', () => {
    expect(render(<Donate />).text()).toContain('https://bumblebeeconservation.org/');
    expect(render(<Donate />).text()).toContain('https://www.planetbee.org/?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOgqauFbe6WgszbJRAfi-jP1atAuoRLGGTaaBjxlPMSUaAncB8P8HAQ');
    expect(render(<Donate />).text()).toContain('https://www.buglife.org.uk/adopt-shrill-carder-bee?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOlQPJExuKhmXzG2o1_K-Jf4FYYnU2GQc0xTnpAfPlwkaAsa58P8HAQ');
  });
});
