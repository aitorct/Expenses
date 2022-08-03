import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import useExpenses from '@hooks/useExpenses';
import HeaderRight from './components/HeaderRight';
import ExpenseList from './components/ExpensesList';
import {ROUTES, StackParamList} from '@navigation/routes';

const Expenses = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {loadingFirstBatch, fetchMore} = useExpenses();

  useLayoutEffect(() => {
    const onPress = () => {
      navigation.navigate(ROUTES.filters);
    };

    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={onPress} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!loadingFirstBatch && <ExpenseList onEndReached={fetchMore} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Expenses;
