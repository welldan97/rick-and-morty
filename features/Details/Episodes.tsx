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
    <div className="shadow-md rounded-lg  bg-base-300">
      <div className="tabs tabs-boxed">
        {parsedEpisodes.map(e => (
          <button
            key={e}
            className={classNames(
              'tab tab-sm w-28 justify-start',
              e === episodeId && 'tab-active',
            )}
            onClick={() => setEpisodeId(e)}
            type="button"
          >
            Episode {e}
          </button>
        ))}
      </div>
      <div className="p-8 pt-6">
        <EpisodeDetails episodeId={episodeId} />
      </div>
    </div>
  );
});

export default Episodes;
