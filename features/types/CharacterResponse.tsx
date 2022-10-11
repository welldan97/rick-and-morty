import Character from './Character';

export default interface Response {
  pageCount: number;
  characters: Character[];
}
