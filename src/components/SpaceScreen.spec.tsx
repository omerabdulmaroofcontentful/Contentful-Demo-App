import React from 'react';
import SpaceScreen from './SpaceScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<SpaceScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
