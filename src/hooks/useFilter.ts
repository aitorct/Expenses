import {useContext} from 'react';
import {FiltersContext} from '@contexts/FiltersContext';
import {FilterType, FilterValue} from '@contexts/FiltersContext/types';

export const useFilter = (filterType: FilterType) => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilter must be used within a FiltersProvider');
  }

  const {filters, applyFilters} = context;

  const applyFilter = (value: FilterValue) => {
    applyFilters(filterType, value);
  };

  const filterValue = filters[filterType].value;

  return {applyFilter, filterValue};
};
