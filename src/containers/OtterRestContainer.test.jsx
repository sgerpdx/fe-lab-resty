import React from 'react';
import { render, screen } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';
import userEvent from '@testing-library/user-event';

describe('API utility container file', () => {
  it('displays what it is supposed to display', async () => {
    render(<OtterRestContainer />);

    // screen.getByText('Loading...');

    const input = await screen.findByLabelText('URL');
    userEvent.type(input, 'Jim');

    // const methodChoice = await screen.findByRole('radio', { name: 'Method' });
    // fireEvent.change(methodChoice, { target: { value: 'PUT' } });
    // expect(methodChoice.value).toBe('PUT');

    const goSubmit = await screen.findByRole('button', {
      name: 'send-req',
    });
    userEvent.click(goSubmit);

    // const enterJson = await screen.findByRole('textbox', { name: 'jsonEntry' });
    // userEvent.type(enterJson, `{ query: 'Scotland'}`);
  });
});
