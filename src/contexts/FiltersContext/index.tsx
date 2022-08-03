import React, {ReactNode, useState} from 'react';
import {
  Filters,
  FiltersContextInterface,
  FilterType,
  FilterValue,
} from './types';

const defaultFilters = {
  user: {
    value: null,
  },
  year: {
    value: null,
  },
  receipts: {
    value: null,
  },
};

export const FiltersContext =
  React.createContext<FiltersContextInterface | null>(null);

export const FiltersProvider = ({children}: {children: ReactNode}) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const applyFilters = (key: FilterType, value: FilterValue) => {
    const updatedFilters = {...filters, [key]: {value}};
    setFilters(updatedFilters);
  };

  const filtersActive = Object.values(filters).some(filter => !!filter.value);

  return (
    <FiltersContext.Provider value={{filters, applyFilters, filtersActive}}>
      {children}
    </FiltersContext.Provider>
  );
};
