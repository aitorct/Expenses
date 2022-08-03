import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useExpenses from '@hooks/useExpenses';
import HeaderRight from './components/HeaderRight';
import ExpenseList from './components/ExpensesList';

const Expenses = () => {
  const navigation = useNavigation();
  const {loadingFirstBatch, fetchMore} = useExpenses();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight />,
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
