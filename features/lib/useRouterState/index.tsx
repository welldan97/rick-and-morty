import { useRouter } from 'next/router';

const parseValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) return value[0];
  return value;
};

export default (key: string, defaultValue?: string) => {
  const router = useRouter();
  const value = parseValue(router.query[key]) ?? defaultValue;
  return { value, isReady: router.isReady };
};
