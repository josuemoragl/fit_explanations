import React from 'react';
import {
  Padding,
  Row,
  SizedBox,
  Text,
} from '../../../../../../common/presentation/components/atoms';
import {
  Button,
  Heading,
} from '../../../../../../common/presentation/components/molecules';
import {useNavigation} from '@react-navigation/native';

function ReactContextMainScreen() {
  const navigation = useNavigation<any>();
  return (
    <Padding paddingHorizontal={10} paddingVertical={10}>
      <Heading>When to Use Context</Heading>
      <Text>
        In a typical React application, data is passed top-down (parent to
        child) via props, but such usage can be cumbersome for certain types of
        props (e.g. locale preference, UI theme) that are required by many
        components within an application. Context provides a way to share values
        like these between components without having to explicitly pass a prop
        through every level of the tree.
      </Text>

      <Heading>
        why react context re-renders every child and react redux don't?
      </Heading>

      <Text>
        The difference in re-renders between React Context and React Redux
        primarily stems from their respective mechanisms for managing state
        updates and triggering re-renders.
      </Text>

      <Heading>React Context</Heading>
      <Text>
        React Context provides a way to pass data through the component tree
        without having to pass props down manually at every level. When the
        context value changes, all components that consume that context will
        re-render. If you use context to manage state, updates to that state
        will cause re-renders for all components consuming that context,
        regardless of whether they actually use the updated state. React Context
        does not inherently have built-in mechanisms for optimizing re-renders,
        so all consumers will re-render on context updates by default.
      </Text>

      <Row justifyContent="center">
        <Button
          label="With context"
          onPress={() => navigation.navigate('context_do')}
          icon={''}
          extended={false}
        />
        <SizedBox width={10} />
        <Button
          label="With no context"
          onPress={() => navigation.navigate('context_do_not')}
          icon={''}
          extended={false}
        />
      </Row>
    </Padding>
  );
}

export default ReactContextMainScreen;
