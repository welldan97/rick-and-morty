import { render } from '@testing-library/react';
import characterResponse from '../test/fixtures/characterResponse';
import Cards from './Cards';

describe('Cards', () => {
  test('render', () => {
    const { container } = render(
      <Cards characters={characterResponse.characters} />,
    );

    expect(container).toMatchSnapshot();
  });
});
