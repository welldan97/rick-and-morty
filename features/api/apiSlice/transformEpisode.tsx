import Episode from '../../types/Episode';
import RawEpisode from '../../types/RawEpisode';

const transformEpisode = (episode: RawEpisode): Episode => ({
  ...episode,
  airDate: episode.air_date,
});

export default transformEpisode;
