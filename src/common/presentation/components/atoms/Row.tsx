import React from 'react';
import {FlexStyle, StyleSheet, View} from 'react-native';

interface RowProps {
  children: React.ReactNode;
  justifyContent?: FlexStyle['justifyContent'];
}

function Row(props: RowProps): React.ReactElement {
  const {children, justifyContent = 'flex-start'} = props;
  return (
    <View style={[styles.row, {justifyContent: justifyContent}]}>
      {children}
    </View>
  );
}

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
