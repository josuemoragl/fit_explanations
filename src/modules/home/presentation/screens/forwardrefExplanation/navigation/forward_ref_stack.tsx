import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactForwardRefMainScreen from '../screens/forwardRefMain/forward_ref_main';
import WithForwardRefScreen from '../screens/withForwardRef/with_forward_ref';
import WithoutForwardRefScreen from '../screens/withoutForwardRef/without_forward_ref';
import {forwardRefRoutes} from './forward_ref_routes';

const Stack = createNativeStackNavigator();

export default function ForwardRefStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={forwardRefRoutes.forwardRefMain}
        component={ReactForwardRefMainScreen}
      />
      <Stack.Screen
        name={forwardRefRoutes.withForwardRef}
        component={WithForwardRefScreen}
      />
      <Stack.Screen
        name={forwardRefRoutes.withoutForwardRef}
        component={WithoutForwardRefScreen}
      />
    </Stack.Navigator>
  );
}
