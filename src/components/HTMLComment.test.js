/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import HTMLComment from './HTMLComment';

const TEXT = 'this is the text';

afterEach(cleanup);
test('should render a comment in the markup', async () => {
  render(
    <div data-testid="test-id">
      <HTMLComment text={TEXT} />
    </div>
  );
  const res = await screen.getByTestId('test-id');
  expect(res.firstChild).toHaveTextContent(TEXT);
  expect(res.firstChild).toMatchInlineSnapshot(`<!-- this is the text -->`);
});
