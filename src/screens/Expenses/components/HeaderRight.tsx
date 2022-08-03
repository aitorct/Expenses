import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFilters} from '@hooks/useFilters';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

interface Props {
  onPress: () => void;
}

const HeaderRight = ({onPress}: Props) => {
  const {filtersActive} = useFilters();

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={filtersActive ? 'filter' : 'filter-outline'}
        color={colors.icon}
        size={sizes.icon}
      />
    </TouchableOpacity>
  );
};

export default HeaderRight;
