import { ComponentPropsWithoutRef, memo } from 'react';
import useRouter from '../useRouter';
import BaseLink from './Presentational';

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  query?: (prevQuery: Record<string, string>) => Record<string, string>;
  children: React.ReactNode;
  isDisabled?: boolean;
  scroll?: boolean;
}

const Link = memo(
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

    return (
      <BaseLink
        href={hrefWithQuery}
        isDisabled={isDisabled}
        scroll={scroll}
        {...rest}
      >
        {children}
      </BaseLink>
    );
  },
);

export default Link;
