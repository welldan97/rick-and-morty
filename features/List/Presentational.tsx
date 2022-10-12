import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import classNames from 'classnames';
import { memo } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import Navbar from '../lib/Navbar';
import Character from '../types/Character';
import Cards from './Cards';
import DataWrapper from './DataWrapper';
import Pagination from './Pagination';
import Sidebar from './Sidebar';

interface Props {
  isFiltersOpen: boolean;
  onChangeIsFiltersOpen: (value: boolean) => void;
}

const List = memo(({ isFiltersOpen, onChangeIsFiltersOpen }: Props) => (
  <>
    <Navbar>
      {() => (
        <button
          className={classNames(
            'btn btn-ghost rounded-btn sm:hidden',
            isFiltersOpen && 'btn-active',
          )}
          type="button"
          onClick={() => onChangeIsFiltersOpen(!isFiltersOpen)}
        >
          <MdMenu className="w-6 h-6" />
        </button>
      )}
    </Navbar>
    <div className="flex">
      {isFiltersOpen && <Sidebar />}
      <DataWrapper>
        {({ characters, pageCount }) => (
          <div className="flex flex-col items-center -mt-32 sm:pl-64">
            <Cards characters={characters} />
            <Pagination pageCount={pageCount} />
            <ScrollToTop
              smooth
              className="flex justify-center items-center shadow-md rounded-md"
            />
          </div>
        )}
      </DataWrapper>
    </div>
  </>
));

export default List;
