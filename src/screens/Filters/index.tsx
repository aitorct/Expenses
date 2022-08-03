import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList, ROUTES} from '@navigation/routes';
import YearFilter from './components/Year';
import UserFilter from './components/User';
import ReceiptsFilter from './components/Receipts';
import colors from '@theme/colors';
import sizes from '@theme/sizes';
import fontSizes from '@theme/fontSizes';

const Filters = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const onSelectUser = () => {
    navigation.navigate(ROUTES.userSelection);
  };

  return (
    <View style={styles.container}>
      <UserFilter onPress={onSelectUser} />
      <View style={styles.filterWrapper}>
        <YearFilter />
      </View>
      <View style={styles.filterWrapper}>
        <ReceiptsFilter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.s24,
    paddingHorizontal: sizes.s16,
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 16.0,

    elevation: 24,
  },
  background: {
    backgroundColor: colors.background,
  },
  filterWrapper: {
    paddingTop: sizes.s32,
  },
  content: {
    alignItems: 'flex-start',
    paddingBottom: sizes.s16,
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
});

export default Filters;
