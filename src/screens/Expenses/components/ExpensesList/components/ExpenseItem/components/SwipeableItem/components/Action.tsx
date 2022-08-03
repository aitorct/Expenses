import React from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@theme/colors';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';

const Action = ({
  title,
  icon,
  progress,
}: {
  title: string;
  icon: string;
  progress: Animated.AnimatedInterpolation;
}) => {
  const textOpacity = progress.interpolate({
    inputRange: [0, 0.75, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              scale: progress,
            },
          ],
        },
      ]}>
      <Icon name={icon} color={colors.icon} size={sizes.largeIcon} />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: textOpacity,
            transform: [
              {
                scale: progress,
              },
            ],
          },
        ]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizes.square,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.actionText,
    color: colors.text,
    paddingTop: sizes.s4,
  },
});

export default Action;
