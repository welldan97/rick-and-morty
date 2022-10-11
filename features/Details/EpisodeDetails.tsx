import { memo } from 'react';

import { useGetEpisodeQuery } from '../api/apiSlice';
import DlItem from '../lib/DlItem';
import Episode from '../types/Episode';

interface Props {
  episode: Episode;
}

const EpisodeDetails = memo(({ episode }: Props) => (
  <>
    <h2 className="text-2xl font-bold mb-4">Episode {episode.id}</h2>
    <dl>
      <DlItem term="ID" definition={episode.id} />
      <DlItem term="Name" definition={episode.name} />
      <DlItem term="Air Date" definition={episode.air_date} />
      <DlItem term="Episode" definition={episode.episode} />
    </dl>
  </>
));

interface ContainerProps {
  episodeId: number;
}

export default memo(({ episodeId }: ContainerProps) => {
  const { data, isSuccess } = useGetEpisodeQuery(episodeId);
  if (!isSuccess) return null;
  return <EpisodeDetails episode={data} />;
});
