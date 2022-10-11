import omit from 'lodash/fp/omit';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ComponentPropsWithoutRef, memo } from 'react';

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  query?: (prevQuery: Record<string, string>) => Record<string, string>;
  children: React.ReactNode;
  isDisabled?: boolean;
  scroll?: boolean;
}

const Button = memo(
  ({
    children,
    href,
    query = prevQuery => prevQuery,
    isDisabled = false,
    scroll = true,
    ...rest
  }: AnchorProps) => {
    const router = useRouter();
    const prevQuery = Object.fromEntries(
      Object.entries(router.query).map(([k, v]) => [
        k,
        Array.isArray(v) ? v[0] : v || '',
      ]),
    );

    const queryString = new URLSearchParams(query(prevQuery)).toString();
    const hrefWithQuery = queryString ? `${href}?${queryString}` : href;

    if (isDisabled)
      return <span {...omit(['children', 'href'], rest)}>{children}</span>;
    return (
      <Link href={hrefWithQuery} scroll={scroll}>
        <a {...omit(['children', 'href'], rest)} href={hrefWithQuery}>
          {children}
        </a>
      </Link>
    );
  },
);

export default Button;
