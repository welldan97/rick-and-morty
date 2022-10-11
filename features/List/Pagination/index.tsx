import classNames from 'classnames';
import { memo } from 'react';

import Link from '../../lib/Link';
import useRouterState from '../../lib/useRouterState';
import getButtonData from './getButtonData';
import { ButtonData } from './types';

interface Props {
  buttonData: ButtonData[];
}

const Pagination = memo(({ buttonData }: Props) => (
  <div className="btn-group">
    {buttonData.map(b => (
      <Link
        href="/"
        className={classNames(
          'btn w-10',
          b.isActive && 'btn-active',
          b.isDisabled && 'btn-disabled',
        )}
        key={`${b.type}-${b.pageNumber}`}
        query={prevQuery => ({ ...prevQuery, page: `${b.pageNumber}` })}
        isDisabled={b.isDisabled}
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

interface ContainerProps {
  pageCount: number;
}

export default memo(({ pageCount }: ContainerProps) => {
  const { value } = useRouterState('page');
  const currentPage = Number(value) || 1;

  return <Pagination buttonData={getButtonData(pageCount, currentPage)} />;
});
