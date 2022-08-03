import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FilterType} from '@contexts/FiltersContext/types';
import {useFilter} from '@hooks/useFilter';
import strings from '@locales/index';
import colors from '@theme/colors';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';
import FilterHeader from './FilterHeader';

interface Props {
  onPress: () => void;
}

const UserFilter = ({onPress}: Props) => {
  const {filterValue} = useFilter(FilterType.USER);

  return (
    <View>
      <FilterHeader title={strings.filters.user.title} />
      <TouchableOpacity onPress={onPress} style={styles.box}>
        {filterValue ? (
          <Text style={styles.text}>{filterValue}</Text>
        ) : (
          <Text style={styles.placeholder}>
            {strings.filters.user.placeholder}
          </Text>
        )}
        <Icon name="account-circle" color={colors.icon} size={sizes.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: sizes.s48,
    borderRadius: sizes.s12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.s16,
    backgroundColor: colors.touchableTagBackground,
  },
  placeholder: {
    fontSize: fontSizes.largeText,
    color: colors.placeholderText,
  },
  text: {
    fontSize: fontSizes.largeText,
    color: colors.text,
  },
});

export default UserFilter;
