import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from '../../theme';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Card({children, style}: CardProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.cardTheme.color.value,
        },
        styles.main,
        {shadowColor: theme.cardTheme.shadowColor.value},
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 16,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default Card;
