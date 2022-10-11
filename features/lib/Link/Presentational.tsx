import omit from 'lodash/fp/omit';
import BaseLink from 'next/link';

import { ComponentPropsWithoutRef, memo } from 'react';

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
    isDisabled = false,
    scroll = true,
    ...rest
  }: AnchorProps) => {
    if (isDisabled)
      return <span {...omit(['children', 'href'], rest)}>{children}</span>;
    return (
      <BaseLink href={href} scroll={scroll}>
        <a {...omit(['children', 'href'], rest)} href={href}>
          {children}
        </a>
      </BaseLink>
    );
  },
);

export default Link;
