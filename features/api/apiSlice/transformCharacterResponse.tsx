import Response from '../../types/CharacterResponse';
import RawCharacterResponse from '../../types/RawCharacterResponse';
import transformCharacter from './transformCharacter';

const transformCharacterResponse = (
  response: RawCharacterResponse,
): Response => ({
  pageCount: response.info.pages,
  characters: response.results.map(transformCharacter),
});

export default transformCharacterResponse;
