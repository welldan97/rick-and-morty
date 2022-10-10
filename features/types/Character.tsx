import Gender from './Gender';

interface Location {
  name: string;
  url: string;
}

type episode = `https://rickandmortyapi.com/api/episode/${number}`;

export default interface Character {
  id: number;
  gender: Gender;
  image: string;
  name: string;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  origin: Location;
  created: string;
  episode: episode[];
}
