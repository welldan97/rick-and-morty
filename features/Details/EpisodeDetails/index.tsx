import { memo } from 'react';

import { useGetEpisodeQuery } from '../../api/apiSlice';
import Status from '../../lib/Status';
import EpisodeDetails from './Presentational';

interface Props {
  episodeId: number;
}

export default memo(({ episodeId }: Props) => {
  const { data, isSuccess, isError, isFetching } =
    useGetEpisodeQuery(episodeId);
  if (!isSuccess) return <Status isError={isError} />;

  return <EpisodeDetails episode={data} isFetching={isFetching} />;
});
