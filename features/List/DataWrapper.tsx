import { memo } from 'react';

import { useIndexCharactersQuery } from '../api/apiSlice';
import Status from '../lib/Status';
import CharacterResponse from '../types/CharacterResponse';
import useFilters from './useFilters';

interface Props {
  children: (characterResponse: CharacterResponse) => JSX.Element;
}

export default memo(({ children }: Props) => {
  const { page, name, status, gender, isReady } = useFilters();

  const { data, isSuccess, isError, error } = useIndexCharactersQuery(
    { page, name, status, gender },
    { skip: !isReady },
  );

  if (!isSuccess)
    // TODO: Fix error type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Status isError={isError} error={(error as any)?.data?.error} />;

  return children(data);
});
