import React from 'react';
import AccessScreen from './AccessScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<AccessScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
