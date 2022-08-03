import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ExpenseRealmContext} from './contexts/ExpenseRealmContext';
import {FiltersProvider} from '@contexts/FiltersContext';
import ExpenseList from './screens/Expenses';
import ExpenseDetail from '@screens/ExpenseDetail';
import Receipts from '@screens/Receipts';
import UserSelection from '@screens/UserSelection';
import Filters from '@screens/Filters';
import {ROUTES, StackParamList} from './navigation/routes';
import colors from '@theme/colors';
import strings from './locales';

const {RealmProvider} = ExpenseRealmContext;

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <RealmProvider>
          <SafeAreaProvider>
            <FiltersProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name={ROUTES.expenses}
                  component={ExpenseList}
                  options={{
                    headerStyle: {
                      backgroundColor: colors.background,
                    },
                    headerLargeTitle: true,
                    headerLargeStyle: {
                      backgroundColor: colors.background,
                    },
                    headerLargeTitleShadowVisible: false,
                  }}
                />
                <Stack.Screen
                  name={ROUTES.expenseDetail}
                  component={ExpenseDetail}
                  options={{
                    title: '',
                    headerTintColor: colors.text,
                    headerStyle: {
                      backgroundColor: colors.background,
                    },
                  }}
                />
                <Stack.Screen
                  name={ROUTES.receipts}
                  component={Receipts}
                  options={({route}) => ({
                    title: `${route.params.merchant} - ${route.params.amount}`,
                    headerTintColor: colors.text,
                    headerStyle: {
                      backgroundColor: colors.background,
                    },
                  })}
                />
                <Stack.Screen
                  name={ROUTES.filters}
                  component={Filters}
                  options={{
                    headerTintColor: colors.text,
                    headerStyle: {
                      backgroundColor: colors.background,
                    },
                  }}
                />
                <Stack.Screen
                  name={ROUTES.userSelection}
                  component={UserSelection}
                  options={{
                    title: strings.user_selection.title,
                    headerTintColor: colors.text,
                    headerStyle: {
                      backgroundColor: colors.background,
                    },
                  }}
                />
              </Stack.Navigator>
            </FiltersProvider>
          </SafeAreaProvider>
        </RealmProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
