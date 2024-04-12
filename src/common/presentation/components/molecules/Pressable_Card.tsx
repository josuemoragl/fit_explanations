import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Card from '../atoms/Card';

interface PressableCardProps {
  children: React.ReactNode;
  onPress: () => void;
  testID: string;
  accessibilityLabel: string;
}

function PressableCard({
  children,
  onPress,
  testID,
  accessibilityLabel,
}: PressableCardProps): React.ReactNode {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}>
      <Card style={styles.card}>{children}</Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
  },
});

export default PressableCard;
