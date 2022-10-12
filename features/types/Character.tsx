import RawCharacter from './RawCharacter';

type Character = Omit<RawCharacter, 'origin' | 'episodes'> & {
  origin: string;
  episodes: number[];
};

export default Character;
