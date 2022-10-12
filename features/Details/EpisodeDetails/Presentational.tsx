import classNames from 'classnames';
import { memo } from 'react';

import DlItem from '../../lib/DlItem';
import Episode from '../../types/Episode';

interface Props {
  episode: Episode;
  isFetching: boolean;
}

const EpisodeDetails = memo(({ episode, isFetching }: Props) => (
  <div className={classNames(isFetching && 'opacity-50')}>
    <h2 className="text-2xl font-bold mb-4">Episode {episode.id}</h2>
    <dl>
      <DlItem term="ID" definition={episode.id} />
      <DlItem term="Name" definition={episode.name} />
      <DlItem term="Air Date" definition={episode.airDate} />
      <DlItem term="Episode" definition={episode.episode} />
    </dl>
  </div>
));

export default EpisodeDetails;
