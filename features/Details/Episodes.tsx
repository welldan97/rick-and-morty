import classNames from 'classnames';
import { memo, useState } from 'react';
import Character from '../types/Character';
import EpisodeDetails from './EpisodeDetails';

interface Props {
  episodes: Character['episode'];
}

const parseEpisode = (episode: string) =>
  Number(episode.replace('https://rickandmortyapi.com/api/episode/', ''));

const Episodes = memo(({ episodes }: Props) => {
  const parsedEpisodes = episodes.map(parseEpisode);
  const [episodeId, setEpisodeId] = useState<number>(parsedEpisodes[0]);

  return (
    <div>
      <div className="tabs tabs-boxed">
        {parsedEpisodes.map(e => (
          <button
            key={e}
            className={classNames('tab', e === episodeId && 'tab-active')}
            onClick={() => setEpisodeId(e)}
            type="button"
          >
            Episode {e}
          </button>
        ))}
      </div>
      <EpisodeDetails episodeId={episodeId} />
    </div>
  );
});

export default Episodes;
