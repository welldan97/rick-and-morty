import { memo, ReactNode } from 'react';
import Link from '../Link';

interface Props {
  children: () => ReactNode;
}

const Navbar = memo(({ children }: Props) => (
  <nav className="navbar shadow-lg bg-base-100 z-50 sticky top-0 h-48  -translate-y-32 pt-32 flex items-center py-0 w-full">
    {children()}
    <Link href="/" query={() => ({})}>
      <img src="logo.png" className="h-10 mx-2" alt="Rick & Morty" />
    </Link>
  </nav>
));

export default Navbar;
