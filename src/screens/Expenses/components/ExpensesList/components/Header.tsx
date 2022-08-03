import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '@theme/colors';
import fontSizes from '@theme/fontSizes';

interface Props {
  date: string;
}

const Header = ({date}: Props) => {
  const formattedDate = new Date(date).toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <Text style={styles.text}>{formattedDate}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.categoryText,
    fontSize: fontSizes.text,
    fontWeight: '500',
  },
});

export default Header;
