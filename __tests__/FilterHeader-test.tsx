import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FilterHeader from '@screens/Filters/components/FilterHeader';

it('FilterHeader renders correctly', () => {
  const tree = renderer.create(<FilterHeader title={'Title'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
