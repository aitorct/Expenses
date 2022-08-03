import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '@components/Tag';
import sizes from '@theme/sizes';
import colors from '@theme/colors';

it('Tag with text renders correctly', () => {
  const tree = renderer.create(<Tag text={'Tag test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Tag with icon renders correctly', () => {
  const tree = renderer.create(<Tag icon={'eye'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Tag with icon and text renders correctly', () => {
  const tree = renderer.create(<Tag icon="eye" text={'Tag test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Tag with style renders correctly', () => {
  const style = {padding: sizes.s24};

  const tree = renderer
    .create(<Tag text={'Tag test'} style={style} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Tag with text style renders correctly', () => {
  const textStyle = {color: colors.placeholderText};

  const tree = renderer
    .create(<Tag text={'Tag test'} textStyle={textStyle} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
