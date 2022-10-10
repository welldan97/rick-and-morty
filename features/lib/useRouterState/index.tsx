import { useRouter } from 'next/router';

export default (key: string, defaultValue?: string) => {
  const router = useRouter();
  const value = router.query[key] ?? defaultValue;
  return { value, isReady: router.isReady };
};
