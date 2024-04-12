import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Text} from '../../../../common/presentation/components/atoms';
import {
  Heading,
  PressableCard,
} from '../../../../common/presentation/components/molecules';

interface ExplanationItemProps {
  item: {
    route: string;
    description: string;
    title: string;
  };
  index: number;
}

function ExplanationItem({
  item,
  index,
}: ExplanationItemProps): React.ReactElement {
  const navigation = useNavigation<any>();
  const {route, description, title} = item;
  return (
    <PressableCard
      onPress={(): void => navigation.navigate(route)}
      testID={`pressable-item${index}`}
      accessibilityLabel={`pressable-item${index}`}>
      <>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </>
    </PressableCard>
  );
}

interface ExplanationsProps {
  data: any[];
}

export function Explanations(props: ExplanationsProps): React.ReactElement {
  return (
    <FlatList
      testID="explanations_list"
      accessibilityLabel="explanations_list"
      style={styles.flatList}
      data={props.data}
      renderItem={({item, index}): React.ReactElement => (
        <ExplanationItem item={item} index={index} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  flatList: {
    marginTop: 10,
  },
});
