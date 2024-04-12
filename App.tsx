import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
} from 'react-native-paper';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import MainStack from './src/common/presentation/navigation/main_navigation';
import {useTheme} from './src/common/presentation/theme';
import {ThemeProvider} from './src/common/presentation/theme/theme_provider';
import {
  Brightness,
  ThemeData,
} from './src/common/presentation/theme/themeData/interfaces';

interface AppProps {
  theme: ThemeData;
}

function App({theme}: AppProps): React.ReactElement {
  const isDarTheme = theme.colorScheme.brightness === Brightness.dark;
  const navigationTheme = isDarTheme ? DarkTheme : DefaultTheme;

  const appTheme = {
    ...navigationTheme,
    colors: {
      ...navigationTheme.colors,
      background: theme.colorScheme.background.value,
      card: theme.cardTheme.color.value,
    },
  };

  const paperCurrentTheme: MD3Theme = isDarTheme ? MD3DarkTheme : MD3LightTheme;

  const paperTheme: MD3Theme = {
    ...paperCurrentTheme,
    colors: {
      ...paperCurrentTheme.colors,
      primary: theme.colorScheme.primary.value,
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={appTheme}>
        <PaperProvider theme={paperTheme}>
          <MainStack />
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default function AppWrapper(): React.ReactElement {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}

function ThemeWrapper(): React.ReactElement {
  const theme = useTheme();
  console.log({theme});

  return <App theme={theme} />;
}
