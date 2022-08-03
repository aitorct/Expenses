import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tag from '@components/Tag';
import {ParsedExpense} from '@models/types';
import colors from '@theme/colors';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';

interface Props {
  expense: ParsedExpense;
}

const Card = ({expense}: Props) => {
  return (
    <View>
      <View style={styles.spaceBetweenRow}>
        <View>
          <Text style={styles.merchant}>{expense.merchant}</Text>
          <Text style={styles.time}>{expense.time}</Text>
        </View>
        <Text style={styles.amount}>{expense.amount}</Text>
      </View>
      <View style={[styles.spaceBetweenRow, styles.separator]}>
        <Tag icon={'account-circle'} text={expense.user_name} />
        <View style={styles.row}>
          {expense.hasComment && <Tag icon={'comment'} />}
          {expense.hasAttachedReceipts && (
            <Tag
              style={styles.tagPadding}
              icon={'receipt'}
              text={expense.receiptsAmount}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginTop: sizes.s16,
  },
  merchant: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fontSizes.text,
  },
  time: {
    color: colors.text,
    fontSize: fontSizes.smallText,
  },
  amount: {
    color: colors.text,
    fontWeight: '500',
    fontSize: fontSizes.text,
  },
  tagPadding: {
    marginLeft: sizes.s8,
  },
});

export default Card;
