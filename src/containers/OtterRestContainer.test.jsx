import React from 'react';
import { render, screen } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';
import userEvent from '@testing-library/user-event';

describe('API utility container file', () => {
  it('displays the controls component form elements', async () => {
    render(<OtterRestContainer />);

    // screen.getByText('Loading...');

    const input = await screen.findByLabelText('URL');
    userEvent.type(input, 'Jim');

    const methodChoice = await screen.findByRole('radio', {
      name: 'Method',
    });
    //console.log('method////////////', methodChoice);
    expect(methodChoice.value).toBe('GET');

    const goSubmit = await screen.findByRole('button', {
      name: 'send-req',
    });
    userEvent.click(goSubmit);

    await screen.findByRole('textbox', {
      name: 'JSON Input',
    });
  });
});
