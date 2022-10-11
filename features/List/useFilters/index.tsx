import Character from '../../types/Character';
import useSearchParams from '../../lib/useSearchParams';
import useDebouncedName from './useDebouncedName';

interface Value {
  page: number;
  name: string;
  status?: Character['status'];
  gender?: Character['gender'];
}

interface Result extends Value {
  setName: (name: string) => void;
  setStatus: (status: string) => void;
  setGender: (gender: string) => void;
  isReady: boolean;
}

const parsePage = (page: string) => {
  const parsedPage = Number(page);
  return Number.isNaN(parsedPage) ? 1 : parsedPage;
};

const parseStatus = (status: string): Result['status'] => {
  switch (status) {
    case 'Alive':
    case 'Dead':
    case 'unknown':
      return status;
    default:
      return undefined;
  }
};

const parseGender = (gender: string): Result['gender'] => {
  switch (gender) {
    case 'male':
    case 'female':
    case 'genderless':
    case 'unknown':
      return gender;
    default:
      return undefined;
  }
};

const useFilters = (): Result => {
  const { value, setValue, isReady } = useSearchParams();

  const setGender: Result['setGender'] = gender => {
    const parsed = parseGender(gender);
    setValue(prevQuery => ({
      ...prevQuery,
      gender: parsed ?? '',
      page: '',
    }));
  };

  const setStatus: Result['setStatus'] = status => {
    const parsed = parseStatus(status);
    setValue(prevQuery => ({
      ...prevQuery,
      status: parsed ?? '',
      page: '',
    }));
  };

  const { name, setName } = useDebouncedName({
    name: value.name,
    isReady,
    setValue,
  });

  return {
    page: parsePage(value.page),

    name,
    setName,
    status: parseStatus(value.status),
    setStatus,
    gender: parseGender(value.gender),
    setGender,
    isReady,
  };
};

export default useFilters;
