import React from 'react';
import {StyleSheet, Text} from 'react-native';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';
import colors from '@theme/colors';

const FilterHeader = ({title}: {title: string}) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.subtitle,
    fontWeight: '500',
    paddingBottom: sizes.s12,
    color: colors.text,
  },
});

export default FilterHeader;
