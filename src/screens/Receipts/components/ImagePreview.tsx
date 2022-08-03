import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  imageUri: string;
}

const ImagePreview = ({imageUri}: Props) => (
  <View style={styles.flex}>
    <FastImage source={{uri: imageUri}} style={styles.flex} />
  </View>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default ImagePreview;
