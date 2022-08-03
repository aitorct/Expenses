import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

interface Props {
  onPress: () => void;
}

const HeaderRight = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={'filter'} color={colors.icon} size={sizes.icon} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
