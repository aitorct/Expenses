import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageThumbnail from './components/ImageThumbnail';
import sizes from '@theme/sizes';

interface Props {
  images: string[];
  selectedImageUri: string;
  setSelectedImageUri: (imageUri: string) => void;
}

const ImageThumbnailList = React.forwardRef<ScrollView, Props>(
  ({images, selectedImageUri, setSelectedImageUri}, ref) => (
    <ScrollView
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.container}>
      {images.map(imageUri => (
        <View key={imageUri} style={styles.thumbnailWrapper}>
          <ImageThumbnail
            onSelect={() => setSelectedImageUri(imageUri)}
            isSelected={imageUri === selectedImageUri}
            imageUri={imageUri}
          />
        </View>
      ))}
    </ScrollView>
  ),
);

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  container: {
    alignItems: 'flex-end',
  },
  thumbnailWrapper: {
    padding: sizes.s8,
  },
});

export default ImageThumbnailList;
