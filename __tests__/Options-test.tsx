import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Options from '@screens/Filters/components/Options';

const mockedFunction = jest.fn(() => {});

const options = ['1', '2', '3'];

it('FilterHeader with no active option renders correctly', () => {
  const tree = renderer
    .create(
      <Options
        options={options}
        activeOption={null}
        onPress={mockedFunction}
        itemsPerRow={3}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Single row FilterHeader renders correctly', () => {
  const tree = renderer
    .create(
      <Options
        options={options}
        activeOption={options[0]}
        onPress={mockedFunction}
        itemsPerRow={3}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Multiple row FilterHeader renders correctly', () => {
  const tree = renderer
    .create(
      <Options
        options={options}
        activeOption={options[0]}
        onPress={mockedFunction}
        itemsPerRow={2}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
