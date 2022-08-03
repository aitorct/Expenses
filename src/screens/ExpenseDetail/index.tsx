import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ParsedExpense} from '@models/types';
import ExpensesDetailView from './ExpensesDetailView';
import colors from '@theme/colors';

interface RouteProps extends Route<string> {
  params: {expense: ParsedExpense};
}

const ExpenseDetail = () => {
  const route = useRoute<RouteProps>();
  const {expense} = route.params;

  const onReceiptsButtonPress = () => {
    // Navigate
  };

  return (
    <SafeAreaView style={[styles.container, styles.flex]} edges={['bottom']}>
      <ExpensesDetailView
        style={styles.flex}
        merchant={expense.merchant}
        amount={expense.amount}
        date={expense.date}
        userName={expense.user_name}
        userEmail={expense.user_email}
        comment={expense.comment}
        hasAttachedReceipts={expense.hasAttachedReceipts}
        onReceiptsButtonPress={onReceiptsButtonPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
  },
  flex: {
    flex: 1,
  },
});

export default ExpenseDetail;
