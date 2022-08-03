import React from 'react';
import {FilterType} from '@contexts/FiltersContext/types';
import {useFilter} from '@hooks/useFilter';
import strings from '@locales/index';
import OptionsFilter from './OptionsFilter';

export enum ReceiptsFilterStatus {
  attached,
  unattached,
}

export const ReceiptsFilterOptions = [
  {
    id: ReceiptsFilterStatus.attached,
    value: strings.filters.receipts.attached,
  },
  {
    id: ReceiptsFilterStatus.unattached,
    value: strings.filters.receipts.unattached,
  },
];

const ReceiptsFilter = () => {
  const {filterValue, applyFilter} = useFilter(FilterType.RECEIPTS);
  const onSelect = (option: string) => {
    option === filterValue ? applyFilter(null) : applyFilter(option);
  };

  const options = ReceiptsFilterOptions.map(option => option.value);

  return (
    <OptionsFilter
      options={options}
      title={strings.filters.receipts.title}
      itemsPerRow={2}
      selectedValue={filterValue}
      onSelect={onSelect}
    />
  );
};

export default ReceiptsFilter;
