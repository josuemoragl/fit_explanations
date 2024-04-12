import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactContextMainScreen from '../screens/context_main_screen';
import ReactContextDoScreen from '../screens/do/do_screen';
import ReactContextDoNotScreen from '../screens/donot/do_not_screen';
import {contextRoutes} from './context_routes';

const Stack = createNativeStackNavigator();

export default function ContextStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={contextRoutes.contextMain}
        component={ReactContextMainScreen}
      />
      <Stack.Screen
        name={contextRoutes.contextDo}
        component={ReactContextDoScreen}
      />
      <Stack.Screen
        name={contextRoutes.contextDoNot}
        component={ReactContextDoNotScreen}
      />
    </Stack.Navigator>
  );
}
