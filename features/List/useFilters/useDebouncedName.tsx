import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

interface Args {
  name: string;
  isReady: boolean;
  setValue: (
    fn: (value: Record<string, string>) => Record<string, string>,
  ) => void;
}
const useDebouncedName = ({ name, isReady, setValue }: Args) => {
  const [realTimeName, setRealTimeName] = useState('');
  // Avoid initial trigger
  const [valueChanged, setValueChanged] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    setRealTimeName(name);
  }, [name, isReady]);

  const [debouncedName] = useDebounce(realTimeName, 300);

  useEffect(() => {
    if (!valueChanged) return;
    if (debouncedName === name) return;
    setValue((prevQuery: Record<string, string>) => ({
      ...prevQuery,
      name: debouncedName,
      page: '',
    }));
  }, [debouncedName]);

  const setName = (value: string) => {
    setValueChanged(true);
    setRealTimeName(value);
  };

  return {
    name: realTimeName,
    setName,
  };
};

export default useDebouncedName;
