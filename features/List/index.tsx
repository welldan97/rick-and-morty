import { memo } from 'react';

import List from './Presentational';
import useFiltersOpen from './useFiltersOpen';

export default memo(() => {
  const { isFiltersOpen, setIsFiltersOpen } = useFiltersOpen();

  return (
    <List
      isFiltersOpen={isFiltersOpen}
      onChangeIsFiltersOpen={setIsFiltersOpen}
    />
  );
});
