import RawCharacter from './RawCharacter';

export default interface RawResponse {
  info: {
    pages: number;
  };
  results: RawCharacter[];
}
