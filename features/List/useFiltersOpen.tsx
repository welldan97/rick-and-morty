import { useWindowWidth } from '@react-hook/window-size';
import { useState, useEffect } from 'react';

const useFiltersOpen = () => {
  const mediaIsSm = useWindowWidth() >= 640;
  const [isFiltersOpen, setIsFiltersOpen] = useState(mediaIsSm);

  useEffect(() => {
    setIsFiltersOpen(mediaIsSm);
  }, [mediaIsSm]);

  return {
    isFiltersOpen,
    setIsFiltersOpen,
  };
};

export default useFiltersOpen;
