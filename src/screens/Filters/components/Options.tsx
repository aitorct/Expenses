import React, {useCallback} from 'react';
import {FlexStyle, StyleProp, StyleSheet, View} from 'react-native';
import {FilterValue} from '@contexts/FiltersContext/types';
import TouchableTag from '@components/TouchableTag';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';

interface Props {
  options: string[];
  activeOption: FilterValue;
  onPress: (option: string) => void;
  itemsPerRow?: number;
}

const Options = ({options, activeOption, onPress, itemsPerRow = 3}: Props) => {
  const getComputedStyles = useCallback(
    (index: number): StyleProp<FlexStyle> => ({
      marginRight: (index + 1) % itemsPerRow === 0 ? undefined : sizes.s8,
      marginBottom:
        Math.floor(index / itemsPerRow + 1) <
        Math.ceil(options.length / itemsPerRow)
          ? sizes.s8
          : undefined,
    }),
    [itemsPerRow, options.length],
  );

  return (
    <View style={[styles.container]}>
      {options.map((option, index) => (
        <TouchableTag
          key={index}
          onPress={() => onPress(option)}
          text={option}
          active={option === activeOption}
          textStyle={styles.tagText}
          buttonStyle={getComputedStyles(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  tagText: {
    fontSize: fontSizes.largeText,
  },
});

export default Options;
