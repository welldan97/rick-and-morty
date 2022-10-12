interface Location {
  name: string;
  url: string;
}

type Gender = 'female' | 'male' | 'genderless' | 'unknown';

type Status = 'Alive' | 'Dead' | 'unknown';

type Episode = `https://rickandmortyapi.com/api/episode/${number}`;

export default interface RawCharacter {
  id: number;
  gender: Gender;
  image: string;
  name: string;
  species: string;
  status: Status;
  type: string;
  origin: Location;
  created: string;
  episode: Episode[];
  location: unknown;
  url: unknown;
}
