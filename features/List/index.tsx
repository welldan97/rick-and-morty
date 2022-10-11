import { useWindowWidth } from '@react-hook/window-size';
import { memo, useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useIndexCharactersQuery } from '../api/apiSlice';
import Navbar from '../lib/Navbar';
import useRouterState from '../lib/useRouterState';
import Character from '../types/Character';
import Cards from './Cards';
import Pagination from './Pagination';
import Sidebar from './Sidebar';

interface Props {
  characters: Character[];
  pageCount: number;
  isFiltersOpen: boolean;
  onChangeIsFiltersOpen: (value: boolean) => void;
}

const Main = memo(
  ({ characters, pageCount, isFiltersOpen, onChangeIsFiltersOpen }: Props) => (
    <>
      <Navbar
        onChangeIsFiltersOpen={onChangeIsFiltersOpen}
        isFiltersOpen={isFiltersOpen}
      />
      <div className="flex">
        {isFiltersOpen && <Sidebar />}
        <div className="flex flex-col items-center -mt-32 sm:pl-64">
          <Cards characters={characters} />
          <Pagination pageCount={pageCount} />
          <ScrollToTop smooth className="flex justify-center items-center" />
        </div>
      </div>
    </>
  ),
);

export default memo(() => {
  const { value: page, isReady } = useRouterState('page');
  const { value: name } = useRouterState('name');
  const { value: status } = useRouterState('status');
  const { value: gender } = useRouterState('gender');
  const mediaIsSm = useWindowWidth() >= 640;

  const [isFiltersOpen, setIsFiltersOpen] = useState(mediaIsSm);
  useEffect(() => {
    setIsFiltersOpen(mediaIsSm);
  }, [mediaIsSm]);

  const { data, isSuccess, ...rest } = useIndexCharactersQuery(
    { page, name, status, gender },
    { skip: !isReady },
  );
  if (!data) return null;
  const { results, info } = data;
  return (
    <Main
      characters={results}
      pageCount={info.pages}
      isFiltersOpen={isFiltersOpen}
      onChangeIsFiltersOpen={setIsFiltersOpen}
    />
  );
});
