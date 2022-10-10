import { memo } from 'react';
import { useIndexCharactersQuery } from '../api/apiSlice';
import Navbar from '../lib/Navbar';
import Character from '../types/Character';
import Cards from './Cards';
import Sidebar from './Sidebar';

interface Props {
  characters: Character[];
}

const Main = memo(({ characters }: Props) => (
  <>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <Cards characters={characters} />
    </div>
  </>
));

export default memo(() => {
  const { data, isSuccess } = useIndexCharactersQuery(undefined);
  if (!isSuccess) return null;
  const { results } = data;
  return <Main characters={results} />;
});
