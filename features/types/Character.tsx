import RawCharacter from './RawCharacter';

type Character = Omit<RawCharacter, 'origin' | 'episode'> & {
  origin: string;
  episodes: number[];
};

export default Character;
