import { useRouter } from 'next/router';

const parseValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) return value[0];
  return value;
};

type Fn = (prevQuery: Record<string, string>) => Record<string, string>;

export default (key: string, defaultValue?: string) => {
  const router = useRouter();
  const value = parseValue(router.query[key]) ?? (defaultValue || '');

  const setValue = (fn: Fn) => {
    if (!router.isReady) return;
    const prevQuery = Object.fromEntries(
      Object.entries(router.query).map(([k, v]) => [
        k,
        Array.isArray(v) ? v[0] : v || '',
      ]),
    );

    router.replace(
      {
        pathname: router.pathname,
        query: fn(prevQuery),
      },
      undefined,
      { scroll: false },
    );
  };

  return { value, isReady: router.isReady, setValue };
};
