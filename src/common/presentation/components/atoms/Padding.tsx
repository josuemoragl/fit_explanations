import React from 'react';
import {DimensionValue, View} from 'react-native';

interface PaddingProps {
  children: React.ReactNode;
  padding?: DimensionValue | undefined;
  paddingBottom?: DimensionValue | undefined;
  paddingTop?: DimensionValue | undefined;
  paddingLeft?: DimensionValue | undefined;
  paddingRight?: DimensionValue | undefined;
  paddingVertical?: DimensionValue | undefined;
  paddingHorizontal?: DimensionValue | undefined;
}

function Padding({
  children,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,
}: PaddingProps) {
  return (
    <View
      style={{
        padding: padding,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
      }}>
      {children}
    </View>
  );
}

export default Padding;
