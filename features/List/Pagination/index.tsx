import { memo } from 'react';

import useFilters from '../useFilters';
import getButtonData from './getButtonData';

import Pagination from './Presentational';

interface Props {
  pageCount: number;
}

export default memo(({ pageCount }: Props) => {
  const { page } = useFilters();

  return <Pagination buttonData={getButtonData(pageCount, page)} />;
});
