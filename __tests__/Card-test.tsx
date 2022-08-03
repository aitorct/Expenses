import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ParsedExpense} from '@models/types';
import Card from '@screens/Expenses/components/ExpensesList/components/ExpenseItem/components/Card';

const mockedExpense: ParsedExpense = {
  id: '1',
  amount: '18€',
  time: '17:48',
  date: '01/01/2020',
  date_and_time: '01/01/2020 17:48',
  year: 2018,
  merchant: 'Amazon',
  hasAttachedReceipts: false,
  receiptsAmount: 0,
  receipts: [],
  hasComment: false,
  comment: '',
  category: '',
  user_name: 'Aitor Cubeles Torres',
  user_email: 'aitor.cubeles@utexas.edu',
};

it('Card with no receipts and no comments renders correctly', () => {
  const tree = renderer.create(<Card expense={mockedExpense} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Card with comments renders correctly', () => {
  const mockedExpenseWithComments = {
    ...mockedExpense,
    comment: 'This is a comment',
    hasComment: true,
  };

  const tree = renderer
    .create(<Card expense={mockedExpenseWithComments} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Card with receipts attached renders correctly', () => {
  const mockedExpenseWithReceipts = {
    ...mockedExpense,
    receipts: ['fakeUrl'],
    hasAttachedReceipts: true,
  };

  const tree = renderer
    .create(<Card expense={mockedExpenseWithReceipts} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Card with receipts and comments attached renders correctly', () => {
  const mockedExpenseWithReceipts = {
    ...mockedExpense,
    comment: 'This is a comment',
    hasComment: true,
    receipts: ['fakeUrl'],
    hasAttachedReceipts: true,
  };

  const tree = renderer
    .create(<Card expense={mockedExpenseWithReceipts} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
