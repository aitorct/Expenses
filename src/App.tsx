import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ExpenseRealmContext} from './contexts/ExpenseRealmContext';
import {FiltersProvider} from '@contexts/FiltersContext';
import ExpenseList from './screens/Expenses';
import {ROUTES} from './navigation/routes';
import colors from '@theme/colors';
import ExpenseDetail from '@screens/ExpenseDetail';

const {RealmProvider} = ExpenseRealmContext;

type StackParamList = {
  [ROUTES.expenses]: undefined;
  [ROUTES.expenseDetail]: undefined;
};

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
