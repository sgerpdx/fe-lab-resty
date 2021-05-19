import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OtterRestContainer from './OtterRestContainer';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import getData from '../services/data-GET.json';

const server = setupServer(
  rest.get('https://lit-shore-34578.herokuapp.com/planets', (req, res, ctx) => {
    return res(ctx.json(getData));
  })
);

describe('API utility container file', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays the Controls component form elements', async () => {
    render(<OtterRestContainer />);

    // screen.getByText('Loading...');

    // Req URL input:
    const input = await screen.findByLabelText('URL:');
    userEvent.type(input, 'Jim');

    // The following 4 items are individual radio-button tests:
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

    // Form submission button:
    const goSubmit = await screen.findByRole('button', {
      name: 'send-req',
    });
    userEvent.click(goSubmit);

    // Raw JSON entry textarea:
    await screen.findByRole('textbox', {
      name: 'JSON Input',
    });
  });

  it('displays the History component', async () => {
    render(<OtterRestContainer />);
    //console.log('>>>', getData);

    await screen.findByRole('textbox', {
      name: 'History Display',
    });

    // return waitFor(() => {
    //   screen.getByText(
    //     `[{"method":"GET","url":"https://lit-shore-34578.herokuapp.com/planets"}]`
    //   );
    // });u
  });

  it('displays the Response component', async () => {
    render(<OtterRestContainer />);

    await screen.findByRole('textbox', {
      name: 'Res Display',
    });

    //mock will show a GET response
  });
});
