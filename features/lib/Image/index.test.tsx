import { render } from '@testing-library/react';
import Image from '.';

describe('Image', () => {
  test('render', () => {
    const { container } = render(
      <Image src="/Success.svg" alt="success" width="100" height="100" />,
    );

    expect(container).toMatchSnapshot();
  });
});
