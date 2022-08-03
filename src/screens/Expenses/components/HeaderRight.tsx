import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

const HeaderRight = () => {
  return (
    <TouchableOpacity>
      <Icon name={'filter'} color={colors.icon} size={sizes.icon} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
