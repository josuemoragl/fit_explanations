import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from '../../theme';

interface BackgroundProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Background({children, style}: BackgroundProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.main,
        {backgroundColor: theme.colorScheme.background.value},
        style,
      ]}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default Background;
