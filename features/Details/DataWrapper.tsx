import { memo } from 'react';

import Character from '../types/Character';
import { useGetCharacterQuery } from '../api/apiSlice';
import useCharacterId from './useCharacterId';
import Status from '../lib/Status';

interface Props {
  children: (character: Character) => JSX.Element;
}
export default memo(({ children }: Props) => {
  const { id, isReady, isError: isIdError } = useCharacterId();
  const skip = !isReady || Number.isNaN(id);
  const { data, isSuccess, isError } = useGetCharacterQuery(id, {
    skip,
  });

  if (isIdError || !isSuccess) return <Status isError={isError || isIdError} />;

  return children(data);
});
