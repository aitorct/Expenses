import React from 'react';
import OptionsFilter from './OptionsFilter';
import strings from '@locales/index';

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

const filterValue = ReceiptsFilterOptions[0].value;

const ReceiptsFilter = () => {
  const onSelect = () => {
    // Apply filter
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
