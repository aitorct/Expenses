import React from 'react';
import strings from '@locales/index';
import useFilterData from '@hooks/useFilterData';
import OptionsFilter from './OptionsFilter';
import {useFilter} from '@hooks/useFilter';
import {FilterType} from '@contexts/FiltersContext/types';

const YearFilter = () => {
  const {filterValue, applyFilter} = useFilter(FilterType.YEAR);
  const {filterData} = useFilterData(FilterType.YEAR);

  const onSelect = (year: string) => {
    year === filterValue ? applyFilter(null) : applyFilter(year);
  };

  return (
    <OptionsFilter
      title={strings.filters.year.title}
      options={filterData}
      itemsPerRow={4}
      selectedValue={filterValue}
      onSelect={onSelect}
    />
  );
};

export default YearFilter;
