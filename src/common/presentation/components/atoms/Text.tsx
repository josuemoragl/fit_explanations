import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {useTheme} from '../../theme';

interface AppTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

function AppText({children, style}: AppTextProps): React.ReactElement {
  const theme = useTheme();
  return (
    <Text style={[styles.text, {color: theme.textTheme.color.value}, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Regular',
  },
});

export default AppText;
