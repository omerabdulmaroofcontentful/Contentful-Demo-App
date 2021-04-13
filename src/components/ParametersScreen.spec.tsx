import React from 'react';
import ParametersScreen from './ParametersScreen';
import { render } from '@testing-library/react';

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<ParametersScreen />);

    expect(getByText('Hello Page Component')).toBeInTheDocument();
  });
});
