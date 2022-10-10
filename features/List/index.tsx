import { memo } from 'react';
import { useIndexCharactersQuery } from '../api/apiSlice';
import Navbar from '../lib/Navbar';
import Character from '../types/Character';
import Cards from './Cards';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import useRouterState from '../lib/useRouterState';

interface Props {
  characters: Character[];
  pageCount: number;
}

const Main = memo(({ characters, pageCount }: Props) => (
  <>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center mb-8">
        <Cards characters={characters} />
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  </>
));

export default memo(() => {
  const { value: page, isReady } = useRouterState('page');
  const { data, isSuccess } = useIndexCharactersQuery(
    { page },
    { skip: !isReady },
  );

  if (!isSuccess) return null;
  const { results, info } = data;
  return <Main characters={results} pageCount={info.pages} />;
});
