import useSearchParams from '../lib/useSearchParams';

interface Result {
  id: number;
  isReady: boolean;
  isError: boolean;
}

const useCharacterId = (): Result => {
  const { value, isReady } = useSearchParams();
  const id = Number(value.id);
  const isError = Number.isNaN(id);

  return {
    id,
    isReady,
    isError,
  };
};

export default useCharacterId;
