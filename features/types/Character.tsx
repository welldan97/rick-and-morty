import RawCharacter from './RawCharacter';

type Character = Omit<RawCharacter, 'origin' | 'episode' | 'created'> & {
  origin: string;
  episodes: number[];
  created: Date;
};

export default Character;
