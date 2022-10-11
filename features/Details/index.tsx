import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';

import { useGetCharacterQuery } from '../api/apiSlice';
import Details from './Presentational';
import useCharacterId from './useCharacterId';

export default memo(() => {
  const router = useRouter();
  const { id, isReady, isError } = useCharacterId();
  const skip = !isReady || Number.isNaN(id);
  const { data, isSuccess } = useGetCharacterQuery(id, { skip });

  const handleBack = useCallback(() => {
    router.back();
    router.push('/', undefined);
  }, []);

  if (isError) return null;
  if (!isSuccess) return null;
  return <Details character={data} onBack={handleBack} />;
});
