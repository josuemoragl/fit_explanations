import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Props} from 'react-native-paper';

function AppTextInput(props: Props): React.ReactElement {
  return <TextInput {...props} style={styles.style} />;
}

const styles = StyleSheet.create({
  style: {
    width: '100%',
  },
});

export default AppTextInput;
