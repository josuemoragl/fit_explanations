import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {hocRoutes} from './hoc_routes';
import ProfileScreenWithAuthValidation from '../screens/auth_hoc_screen';
import HOCMainScreen from '../screens/hoc_main';

const Stack = createNativeStackNavigator();

export default function HOCStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={hocRoutes.hocMainScreen} component={HOCMainScreen} />
      <Stack.Screen
        name={hocRoutes.howAuthenticationScreen}
        component={ProfileScreenWithAuthValidation}
      />
    </Stack.Navigator>
  );
}
