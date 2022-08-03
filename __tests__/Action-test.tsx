import 'react-native';
import {Animated} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Action from '@screens/Expenses/components/ExpensesList/components/ExpenseItem/components/SwipeableItem/components/Action';

it('Action with no animation started renders correctly', () => {
  const animated = new Animated.Value(0);

  const tree = renderer
    .create(<Action title={'Title'} icon={'eye'} progress={animated} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Action with animation finished renders correctly', () => {
  const animated = new Animated.Value(1);

  const tree = renderer
    .create(<Action title={'Title'} icon={'eye'} progress={animated} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
