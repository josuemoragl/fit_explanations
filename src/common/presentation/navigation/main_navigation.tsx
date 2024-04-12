import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from '../../../modules/home/presentation/navigation/home_stack';
import {mainRoutes} from './main_routes';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainRoutes.homeSTack} component={HomeStack} />
    </Stack.Navigator>
  );
}
