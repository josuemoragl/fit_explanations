import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

interface FadeInViewProps {
  children: React.ReactNode;
}

const FadeInView = ({children}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

export default FadeInView;
