import React from 'react';

import {Button as RNPaperButton, Props} from 'react-native-paper';

import {Text} from '../atoms';

export default function Button(props: Props) {
  const {label, onPress} = props;
  return (
    <RNPaperButton mode="contained" onPress={onPress} {...props}>
      <Text>{label}</Text>
    </RNPaperButton>
  );
}
