import { memo } from 'react';

import { useIndexCharactersQuery } from '../api/apiSlice';
import List from './Presentational';
import useFilters from './useFilters';
import useFiltersOpen from './useFiltersOpen';

export default memo(() => {
  const { isFiltersOpen, setIsFiltersOpen } = useFiltersOpen();
  const { page, name, status, gender, isReady } = useFilters();

  const { data } = useIndexCharactersQuery(
    { page, name, status, gender },
    { skip: !isReady },
  );

  if (!data) return null;
  return (
    <List
      characters={data.characters}
      pageCount={data.pageCount}
      isFiltersOpen={isFiltersOpen}
      onChangeIsFiltersOpen={setIsFiltersOpen}
    />
  );
});
