import React from 'react';
import LocalesScreen from './LocalesScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<LocalesScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
