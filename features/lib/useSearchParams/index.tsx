import { Router, useRouter } from 'next/router';

const parseQuery = (routerQuery: Router['query']): Record<string, string> =>
  Object.fromEntries(
    Object.entries(routerQuery)
      .map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])
      .filter(([, v]) => v !== undefined && v !== ''),
  );

type Fn = (prevQuery: Record<string, string>) => Record<string, string>;

export default () => {
  const router = useRouter();
  const value = parseQuery(router.query);

  const setValue = (fn: Fn) => {
    if (!router.isReady) return;
    const prevQuery = parseQuery(router.query);

    router.replace(
      {
        pathname: router.pathname,
        query: parseQuery(fn(prevQuery)),
      },
      undefined,
      { scroll: false },
    );
  };

  return { value, isReady: router.isReady, setValue };
};
