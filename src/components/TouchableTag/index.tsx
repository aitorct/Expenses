import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Tag from '../Tag';
import colors from '@theme/colors';
import sizes from '@theme/sizes';
import {Props} from './types';

const TouchableTag = ({
  text,
  onPress,
  active,
  textStyle,
  buttonStyle,
}: Props) => {
  const customStyles = active ? styles.active : styles.inactive;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Tag
        text={text}
        textStyle={textStyle}
        style={[styles.tag, customStyles]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: sizes.s16,
    paddingVertical: sizes.s12,
    borderWidth: sizes.border,
  },
  active: {
    borderColor: colors.selectedTouchableTagBorder,
  },
  inactive: {
    backgroundColor: colors.touchableTagBackground,
    borderColor: colors.touchableTagBackground,
  },
});

export default TouchableTag;
