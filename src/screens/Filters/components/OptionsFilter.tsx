import React from 'react';
import {View} from 'react-native';
import {FilterValue} from '@contexts/FiltersContext/types';
import Options from './Options';
import FilterHeader from './FilterHeader';

interface Props {
  title: string;
  options: string[];
  itemsPerRow?: number;
  selectedValue: FilterValue;
  onSelect: (option: string) => void;
}

const OptionsFilter = ({
  title,
  options,
  itemsPerRow,
  selectedValue,
  onSelect,
}: Props) => (
  <View>
    <FilterHeader title={title} />
    <Options
      options={options}
      activeOption={selectedValue}
      onPress={onSelect}
      itemsPerRow={itemsPerRow}
    />
  </View>
);

export default OptionsFilter;
