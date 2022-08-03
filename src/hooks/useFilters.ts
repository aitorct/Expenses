import {useContext} from 'react';
import {FiltersContext} from '@contexts/FiltersContext';

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilter must be used within a FiltersProvider');
  }

  return context;
};
