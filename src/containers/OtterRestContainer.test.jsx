import React from 'react';
import { render, screen } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';
import userEvent from '@testing-library/user-event';

describe('API utility container file', () => {
  it('displays the Controls component form elements', async () => {
    render(<OtterRestContainer />);

    // screen.getByText('Loading...');

    const input = await screen.findByLabelText('URL:');
    userEvent.type(input, 'Jim');

    const methodChoiceGet = await screen.findByRole('radio', {
      name: 'Get Method',
    });
    expect(methodChoiceGet.value).toBe('GET');

    const methodChoicePost = await screen.findByRole('radio', {
      name: 'Post Method',
    });
    expect(methodChoicePost.value).toBe('POST');

    const methodChoicePut = await screen.findByRole('radio', {
      name: 'Put Method',
    });
    expect(methodChoicePut.value).toBe('PUT');

    const methodChoiceDelete = await screen.findByRole('radio', {
      name: 'Delete Method',
    });
    expect(methodChoiceDelete.value).toBe('DELETE');

    const goSubmit = await screen.findByRole('button', {
      name: 'send-req',
    });
    userEvent.click(goSubmit);

    await screen.findByRole('textbox', {
      name: 'JSON Input',
    });
  });

  it('displays the History component', async () => {
    render(<OtterRestContainer />);

    await screen.findByRole('textbox', {
      name: 'History Display',
    });

    //mock will show a GET request
  });

  it('displays the Response component', async () => {
    render(<OtterRestContainer />);

    await screen.findByRole('textbox', {
      name: 'Res Display',
    });

    //mock will show a GET response
  });
});
