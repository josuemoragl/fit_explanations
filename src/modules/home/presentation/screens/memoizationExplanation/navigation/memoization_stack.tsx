import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MemoizationMainScreen from '../screens/main';
import {memoizationRoutes} from './memoization_routes';
import WithUseCallbackScreen from '../screens/with_use_callback';
import LargeListDo from '../screens/large_lists_do';
import LargeListDoNot from '../screens/large_lists_do_not';
import WithoutUseCallbackScreen from '../screens/without_use_callback';

const Stack = createNativeStackNavigator();

export default function MemoizationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={memoizationRoutes.memoizationMainScreen}
        component={MemoizationMainScreen}
      />
      <Stack.Screen
        name={memoizationRoutes.withUseCallbackScreen}
        component={WithUseCallbackScreen}
      />
      <Stack.Screen
        name={memoizationRoutes.withoutUseCallbackScreen}
        component={WithoutUseCallbackScreen}
      />
      <Stack.Screen
        name={memoizationRoutes.largeListsDo}
        component={LargeListDo}
      />
      <Stack.Screen
        name={memoizationRoutes.largeListsDoNot}
        component={LargeListDoNot}
      />
    </Stack.Navigator>
  );
}
