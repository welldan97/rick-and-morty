import Character from '../../types/Character';
import RawCharacter from '../../types/RawCharacter';

const parseEpisode = (episode: string) =>
  Number(episode.replace('https://rickandmortyapi.com/api/episode/', ''));

const transformCharacter = (character: RawCharacter): Character => ({
  ...character,
  origin: character.origin.name,
  episodes: character.episode.map(episode => parseEpisode(episode)),
  created: new Date(character.created),
});

export default transformCharacter;
