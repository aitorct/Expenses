import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TouchableTag from '@components/TouchableTag';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';

const mockedFunction = jest.fn(() => {});

const textStyle = {fontSize: fontSizes.title};
const buttonStyle = {padding: sizes.s8};

it('Active TouchableTag renders correctly', () => {
  const tree = renderer
    .create(
      <TouchableTag
        text={'Tag test'}
        onPress={mockedFunction}
        active={true}
        textStyle={textStyle}
        buttonStyle={buttonStyle}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Inactive TouchableTag renders correctly', () => {
  const tree = renderer
    .create(
      <TouchableTag
        text={'Tag test'}
        onPress={mockedFunction}
        active={false}
        textStyle={textStyle}
        buttonStyle={buttonStyle}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
