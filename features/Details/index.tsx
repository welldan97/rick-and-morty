import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';

import { useGetCharacterQuery } from '../api/apiSlice';
import Details from './Presentational';
import useCharacterId from './useCharacterId';

export default memo(() => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
    router.push('/', undefined);
  }, []);

  return <Details onBack={handleBack} />;
});
