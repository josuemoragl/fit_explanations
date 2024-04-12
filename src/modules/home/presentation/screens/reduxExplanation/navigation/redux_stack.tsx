import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactReduxMainScreen from '../redux_main_screen';
import ReactRexuxExampleScreen from '../redux_example';
import {reduxRoutes} from './redux_routes';

const Stack = createNativeStackNavigator();

export default function ReduxStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={reduxRoutes.reduxMainScreen}
        component={ReactReduxMainScreen}
      />
      <Stack.Screen
        name={reduxRoutes.reduxExampleScren}
        component={ReactRexuxExampleScreen}
      />
    </Stack.Navigator>
  );
}
