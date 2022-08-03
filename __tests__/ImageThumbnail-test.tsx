import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImageThumbnail from '@screens/Receipts/components/ImageThumbnailList/components/ImageThumbnail';

const mockedFunction = jest.fn(() => {});

const imageUri = 'file://pictures/image.jpg';

it('Unselected ImageThumbnail renders correctly', () => {
  const tree = renderer
    .create(
      <ImageThumbnail
        onSelect={mockedFunction}
        isSelected={false}
        imageUri={imageUri}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Selected ImageThumbnail renders correctly', () => {
  const tree = renderer
    .create(
      <ImageThumbnail
        onSelect={mockedFunction}
        isSelected={true}
        imageUri={imageUri}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
