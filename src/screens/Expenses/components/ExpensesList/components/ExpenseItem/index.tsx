import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Card from './components/Card';
import SwipeableItem from './components/SwipeableItem';
import {ParsedExpense} from '@models/types';
import {ExpenseScreenProps, ROUTES} from '@navigation/routes';
import colors from '@theme/colors';

type Props = {
  expense: ParsedExpense;
};

const ExpenseItem = ({expense}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ExpenseScreenProps>>();

  const onPress = () => {
    const {merchant, amount, date, user_name, user_email, comment} = expense;
    const expenseDetailParams = {
      expense: {
        merchant,
        amount,
        date,
        user_name,
        user_email,
        comment,
      },
    };

    navigation.navigate(ROUTES.expenseDetail, expenseDetailParams);
  };

  return (
    <View style={styles.shadow}>
      <TouchableOpacity onPress={onPress}>
        <SwipeableItem expense={expense}>
          <Card expense={expense} />
        </SwipeableItem>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 4,
  },
});

export default ExpenseItem;
