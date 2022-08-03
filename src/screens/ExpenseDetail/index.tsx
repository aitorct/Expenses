import React from 'react';
import {Share, StyleSheet} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExpenseDetailScreenParams} from '@navigation/routes';
import ExpensesDetailView from './ExpensesDetailView';
import colors from '@theme/colors';
import strings from '@locales/index';

interface RouteProps extends Route<string> {
  params: ExpenseDetailScreenParams;
}

const ExpenseDetail = () => {
  const route = useRoute<RouteProps>();
  const {expense} = route.params;

  const onReceiptsButtonPress = () => {
    Share.share({
      message: `${expense.merchant} ${strings.share.on} ${expense.date} - ${expense.amount}\n
      ${strings.share.spent_by} ${expense.user_name} (${expense.user_email})`,
    });
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
