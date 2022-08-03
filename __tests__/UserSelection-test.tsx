import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FiltersProvider} from '@contexts/FiltersContext';
import useFilterData from '@hooks/useFilterData';
import UserSelection from '@screens/UserSelection';

const mockedSafeAreaMetrics = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

const mockedUserName = 'Aitor Cubeles Torres';

jest.mock('@hooks/useFilterData', () =>
  jest.fn(() => ({
    filterData: [],
  })),
);

const mockUseFilterData = useFilterData as jest.Mock;

it('UserSelection with no data renders empty state correctly', () => {
  const tree = renderer
    .create(
      <SafeAreaProvider initialMetrics={mockedSafeAreaMetrics}>
        <FiltersProvider>
          <UserSelection />
        </FiltersProvider>
      </SafeAreaProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('UserSelection with data renders correctly', () => {
  mockUseFilterData.mockImplementation(
    jest.fn(() => ({
      filterData: [mockedUserName],
    })),
  );

  const tree = renderer
    .create(
      <SafeAreaProvider initialMetrics={mockedSafeAreaMetrics}>
        <FiltersProvider>
          <UserSelection />
        </FiltersProvider>
      </SafeAreaProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
