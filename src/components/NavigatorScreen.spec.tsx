import React from 'react';
import NavigatorScreen from './NavigatorScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<NavigatorScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
