import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '../../../../common/presentation/theme';
import HomeScreen, {homeScreenOptions} from '../screens/home/home_screen';
import ContextStack from '../screens/contextExplanation/navigation/context_stack';
import ReduxStack from '../screens/reduxExplanation/navigation/redux_stack';
import ForwardRefStack from '../screens/forwardrefExplanation/navigation/forward_ref_stack';
import MemoizationStack from '../screens/memoizationExplanation/navigation/memoization_stack';
import {homeRoutes} from './home_routes';
import HOCStack from '../screens/hocExplanation/navigation/hoc_stack';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={homeScreenOptions(theme)}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen name={homeRoutes.contextStack} component={ContextStack} />
      <Stack.Screen name={homeRoutes.reduxStack} component={ReduxStack} />
      <Stack.Screen
        name={homeRoutes.forwardRefStack}
        component={ForwardRefStack}
      />
      <Stack.Screen
        name={homeRoutes.memoizationStack}
        component={MemoizationStack}
      />
      <Stack.Screen name={homeRoutes.hocStack} component={HOCStack} />
    </Stack.Navigator>
  );
}
