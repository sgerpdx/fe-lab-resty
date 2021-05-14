import React from 'react';
import { render, screen, getByText, waitFor } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';
import userEvent from '@testing-library/user-event';

describe('API utility container file', () => {
  it('displays what it is supposed to display', async () => {
    render(<OtterRestContainer />);

    // screen.getByText('Loading...');

    const input = await screen.findByLabelText('URL');
    userEvent.type(input, 'Jim');

    const goSubmit = await screen.findByRole('button', {
      name: 'send-req',
    });
    userEvent.click(goSubmit);

    // return waitFor(() => {
    //   const newURL = screen.getByText('Jim', { exact: true });
    //   expect(newURL).toHaveLength(3);
    // });
  });
});
