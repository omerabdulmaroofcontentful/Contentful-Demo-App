import React from 'react';
import UserScreen from './UserScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<UserScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
