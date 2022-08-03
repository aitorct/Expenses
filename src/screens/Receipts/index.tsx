import React, {useLayoutEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePreview from './components/ImagePreview';
import AddReceipt from './components/AddReceipt';
import ImageThumbnailList from './components/ImageThumbnailList';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

interface RouteProps extends Route<string> {
  params: {imageUris: string[]; id: string};
}

const Receipts = ({}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const {id, imageUris: paramsImageUris} = route.params;
  const [imageUris, setImageUris] = useState(paramsImageUris);
  const [selectedImageUri, setSelectedImageUri] = useState(paramsImageUris[0]);

  useLayoutEffect(() => {
    const onImageUploaded = (imageUri: string) => {
      setImageUris(currentUris => [...currentUris, imageUri]);
      setSelectedImageUri(imageUri);
      requestAnimationFrame(() => scrollViewRef.current?.scrollToEnd());
    };

    navigation.setOptions({
      headerRight: () => (
        <AddReceipt id={id} onImageUploaded={onImageUploaded} />
      ),
    });
  }, [navigation, id]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.imagePreviewWrapper}>
        <ImagePreview imageUri={selectedImageUri} />
      </View>
      <ImageThumbnailList
        ref={scrollViewRef}
        images={imageUris}
        selectedImageUri={selectedImageUri}
        setSelectedImageUri={setSelectedImageUri}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
    padding: sizes.s16,
  },
  imagePreviewWrapper: {
    flex: 1,
    padding: sizes.s8,
  },
});

export default Receipts;
