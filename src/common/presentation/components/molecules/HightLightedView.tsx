import React, {useEffect, useState, useTransition} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {getRandomColor} from '../../../infrastructure/utils/color';

interface HighlightViewProps {
  children: React.ReactNode;
  color?: string;
}

const HighlightView = ({children, color}: HighlightViewProps) => {
  const [highlightAnim, setHighlightAnim] = useState(new Animated.Value(0));
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setHighlightAnim(new Animated.Value(0));
  }, [children]);

  useEffect(() => {
    if (isPending) {
      return;
    }
    startTransition(() => {
      Animated.timing(highlightAnim, {
        toValue: 1,
        duration: 2000, // Adjust duration as needed
        useNativeDriver: false, // Animation not supported with native driver
      }).start();
    });
  }, [startTransition, highlightAnim, isPending]);

  const defaultColor = color ?? 'transparent';

  const highlightStyle = {
    backgroundColor: highlightAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [defaultColor, getRandomColor(), defaultColor],
    }),
  };

  return (
    <Animated.View style={[styles.container, highlightStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default HighlightView;
