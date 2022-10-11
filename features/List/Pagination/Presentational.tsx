import classNames from 'classnames';
import { memo } from 'react';

import Link from '../../lib/Link';
import { ButtonData } from './types';

interface Props {
  buttonData: ButtonData[];
}

const Pagination = memo(({ buttonData }: Props) => (
  <div className="btn-group mt-6 mb-12">
    {buttonData.map(b => (
      <Link
        href="/"
        className={classNames(
          'btn w-10 bg-base-200 hover:bg-base-100 border-none text-black focus:z-10',
          b.isActive && 'btn-active hover:text-black',
          b.isDisabled && 'opacity-20 cursor-not-allowed',
          b.type === 'between' && 'opacity-75 hover:opacity-100',
          (b.type === 'regular' || b.type === 'between') &&
            !b.isActive &&
            'hidden lg:flex',
        )}
        key={`${b.type}-${b.pageNumber}`}
        query={prevQuery => ({ ...prevQuery, page: `${b.pageNumber}` })}
        isDisabled={b.isDisabled}
        scroll={false}
      >
        {b.type === 'first' && '«'}
        {b.type === 'previous' && '‹'}
        {b.type === 'regular' && b.pageNumber}
        {b.type === 'between' && '…'}
        {b.type === 'next' && '›'}
        {b.type === 'last' && '»'}
      </Link>
    ))}
  </div>
));

export default Pagination;
