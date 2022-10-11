import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import classNames from 'classnames';
import { memo } from 'react';
import Link from '../Link';

interface Props {
  isFiltersOpen: boolean;
  onChangeIsFiltersOpen: (value: boolean) => void;
}

const Navbar = memo(({ isFiltersOpen, onChangeIsFiltersOpen }: Props) => (
  <nav className="navbar shadow-lg bg-base-100 z-50 sticky top-0 h-48  -translate-y-32 pt-32 flex items-center py-0 w-full">
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
    <Link href="/" query={() => ({})}>
      <img src="logo.png" className="h-10 mx-2" alt="Rick & Morty" />
    </Link>
  </nav>
));

export default Navbar;
