import Gender from './Gender';

export default interface Character {
  id: number;
  gender: Gender;
  image: string;
  name: string;
  species: string;
}
