import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@theme/colors';
import sizes from '@theme/sizes';
import {TagType} from './types';

const Tag = ({icon, text, textStyle, style}: TagType) => (
  <View style={[styles.tag, style]}>
    {icon && <Icon name={icon} color={colors.text} size={sizes.smallIcon} />}
    {icon && text && <View style={styles.separator} />}
    {text && (
      <View style={styles.textWrapper}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    backgroundColor: colors.tagBackground,
    padding: sizes.s4,
    paddingHorizontal: sizes.s8,
    borderRadius: sizes.s36,
    alignItems: 'center',
  },
  separator: {
    paddingLeft: sizes.s4,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
  },
});

export default Tag;
