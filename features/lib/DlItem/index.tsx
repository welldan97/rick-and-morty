import { memo } from 'react';

interface Props {
  term: string;
  definition: string | number;
}

const Item = memo(({ term, definition }: Props) => (
  <>
    <dt className="font-bold inline">{term}:</dt>
    <dd className="inline after:block"> {definition || '—'}</dd>
  </>
));

export default Item;
