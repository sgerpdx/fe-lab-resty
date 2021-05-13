import React from 'react';
import { render, screen } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';

describe('API utility container file', () => {
  it('displays what it is supposed to display', async () => {
    render(<OtterRestContainer />);
  });
});
