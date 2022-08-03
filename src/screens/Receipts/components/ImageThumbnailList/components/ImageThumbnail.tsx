import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

interface Props {
  onSelect: () => void;
  isSelected: boolean;
  imageUri: string;
}

const ImageThumbnail = ({onSelect, isSelected, imageUri}: Props) => {
  return (
    <View>
      {isSelected && (
        <View style={styles.indicatorWrapper}>
          <View style={styles.indicator} />
        </View>
      )}
      <TouchableOpacity onPress={onSelect}>
        <FastImage source={{uri: imageUri}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: sizes.s8,
  },
  indicator: {
    height: sizes.dotIndicator,
    width: sizes.dotIndicator,
    borderRadius: sizes.dotIndicator / 2,
    backgroundColor: colors.tertiaryBackground,
  },
  image: {
    width: sizes.square,
    height: sizes.square,
  },
});

export default ImageThumbnail;
