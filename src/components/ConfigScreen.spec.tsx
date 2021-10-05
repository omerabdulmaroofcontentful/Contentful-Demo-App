import React from 'react';
import ConfigScreen from './ConfigScreen';
import { render } from '@testing-library/react';

describe('Config Screen component', () => {
  it('Component text exists', async () => {
    const mockSdk: any = {
      app: {
        onConfigure: jest.fn(),
        getParameters: jest.fn().mockReturnValueOnce({}),
        setReady: jest.fn(),
        getCurrentState: jest.fn()
      }
    };
    const { getByText } = render(<ConfigScreen sdk={mockSdk} />);

    expect(
      getByText('Welcome to your contentful app. This is your config page.')
    ).toBeInTheDocument();
  });
});
