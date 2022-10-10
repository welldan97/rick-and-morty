import omit from 'lodash/fp/omit';
import Link from 'next/link';

import { ComponentPropsWithoutRef, memo } from 'react';

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  children: React.ReactNode;
}

const Button = memo(({ children, href, ...rest }: AnchorProps) => (
  <Link href={href}>
    <a className="btn btn-primary" {...omit(['type', 'children'], rest)}>
      {children}
    </a>
  </Link>
));

export default Button;
