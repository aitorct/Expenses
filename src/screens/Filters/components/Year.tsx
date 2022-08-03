import React from 'react';
import strings from '@locales/index';
import OptionsFilter from './OptionsFilter';

const filterData = ['2018', '2019'];
const filterValue = filterData[0];

const YearFilter = () => {
  const onSelect = () => {
    // Apply filter
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
