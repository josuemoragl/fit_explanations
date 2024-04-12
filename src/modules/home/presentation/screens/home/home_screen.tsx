import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';

import {useTheme} from '../../../../../common/presentation/theme';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import useToggleTheme from '../../../../../common/presentation/theme/hooks/use_toggle_theme';
import {Background} from '../../../../../common/presentation/components/atoms';

import {
  Brightness,
  ThemeData,
} from '../../../../../common/presentation/theme/themeData/interfaces';
import {Explanations} from '../../components/Explanations';
import {homeData} from './data';

function HomeScreen(): React.ReactElement {
  return (
    <Background style={styles.main}>
      <Explanations data={homeData.explanations} />
    </Background>
  );
}

export const homeScreenOptions = (
  theme: ThemeData,
): NativeStackNavigationOptions => ({
  headerRight: (props: HeaderButtonProps) => <HeaderSwitchTheme {...props} />,
  headerStyle: {backgroundColor: theme.colorScheme.background.value},
  headerTintColor: theme.textTheme.color.value,
  customAnimationOnGesture: true,
});

function HeaderSwitchTheme(props: HeaderButtonProps): React.ReactElement {
  console.log({props});
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState<boolean>(
    theme.colorScheme.brightness === Brightness.dark,
  );
  const toggleTheme = useToggleTheme();

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
    toggleTheme();
  };
  return (
    <Switch
      trackColor={theme.switchTheme.trackColor}
      thumbColor={
        isEnabled
          ? theme.switchTheme.thumbColorEnabled.value
          : theme.switchTheme.thumbColorDisabled.value
      }
      ios_backgroundColor={theme.switchTheme.iosBackgroundColor.value}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});
