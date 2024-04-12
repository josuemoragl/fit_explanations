import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CenterProps {
  children: React.ReactElement;
}

function Center({children}: CenterProps): React.ReactElement {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Center;
