import React from 'react';
import {View} from 'react-native';

interface SizedBoxProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

function SizedBox(props: SizedBoxProps) {
  const {children, width, height} = props;
  return <View style={{width: width, height: height}}>{children}</View>;
}

export default SizedBox;
