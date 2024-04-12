import React from 'react';
import {Text} from '../atoms';
import {StyleSheet} from 'react-native';

interface HeadingProps {
  children: React.ReactNode;
}

function Heading({children}: HeadingProps): React.ReactElement {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Heading;
