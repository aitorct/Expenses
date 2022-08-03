import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import useFilteredData from '@hooks/useFilteredData';
import {LIMIT} from '@hooks/useExpenses';
import ExpenseItem from './components/ExpenseItem';
import Header from './components/Header';
import {ParsedExpense} from '@models/types';
import sizes from '@theme/sizes';

type ListItem = string | ParsedExpense;

interface Props {
  onEndReached: () => void;
}

const ExpenseList = ({onEndReached}: Props) => {
  const {data} = useFilteredData();

  const renderItem = useCallback(({item}: {item: ListItem}) => {
    if (typeof item === 'string') {
      // Render header
      return (
        <View style={[styles.listItem, styles.header]}>
          <Header date={item} />
        </View>
      );
    } else {
      // Render item
      return (
        <View style={[styles.listItem, styles.expense]}>
          <ExpenseItem expense={item} />
        </View>
      );
    }
  }, []);

  const getItemType = useCallback(
    (item: ListItem) => (typeof item === 'string' ? 'sectionHeader' : 'row'),
    [],
  );

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      getItemType={getItemType}
      estimatedItemSize={LIMIT}
      onEndReachedThreshold={0.5}
      contentInsetAdjustmentBehavior="automatic"
      onEndReached={onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: sizes.s16,
  },
  header: {
    marginTop: sizes.s16,
  },
  expense: {
    paddingTop: sizes.s8,
  },
});

export default ExpenseList;
