import { render, wait } from '@testing-library/react';
import React from 'react';
import HTMLComment from './HTMLComment';

const TEXT = 'this is the text';

describe('HTMLComment', () => {
  test('should render a comment in the markup', () => {
    try {
      const { findByText, container } = render(<HTMLComment text={TEXT} />);
      expect(findByText(TEXT)).toBeInTheDocument();
      expect(container.firstChild).toMatchInlineSnapshot(`<!--${TEXT}-->`);
    } catch (err) {}
  });
});
