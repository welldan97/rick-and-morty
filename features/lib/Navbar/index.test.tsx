import { render } from '@testing-library/react';

import Navbar from './index';

describe('Navbar', () => {
  test('render', () => {
    const { container } = render(<Navbar>{() => <>test</>}</Navbar>);

    expect(container).toMatchSnapshot();
  });
});
