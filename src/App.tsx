import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpenseList from './screens/Expenses';
import {ExpenseRealmContext} from './contexts/ExpenseRealmContext';
import {ROUTES} from './navigation/routes';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {RealmProvider} = ExpenseRealmContext;

type StackParamList = {
  [ROUTES.expenses]: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RealmProvider>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name={ROUTES.expenses} component={ExpenseList} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </RealmProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
