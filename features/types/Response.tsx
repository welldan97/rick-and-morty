import Character from './Character';

export default interface Response {
  info: {
    pages: number;
  };
  results: Character[];
}
