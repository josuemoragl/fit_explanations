import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  Padding,
  Row,
  SizedBox,
  Text,
} from '../../../../../common/presentation/components/atoms';
import {
  Button,
  Heading,
} from '../../../../../common/presentation/components/molecules';

function ReactReduxMainScreen() {
  const navigation = useNavigation<any>();
  return (
    <Padding paddingHorizontal={10} paddingVertical={10}>
      <Heading>When to Use Redux</Heading>
      <Text>
        Redux and React Context are both tools for managing state in React
        applications, but they serve different purposes and have different
        strengths. Understanding when to use Redux instead of React Context
        depends on various factors such as the size and complexity of your
        application, the need for global state management, performance
        considerations, and personal/team preferences. Here are some scenarios
        where you might choose Redux over React Context:
      </Text>

      <Heading>
        why react redux only re-renders every child that is listening to use
        selector?
      </Heading>

      <Text>
        The difference in re-renders between React Context and React Redux
        primarily stems from their respective mechanisms for managing state
        updates and triggering re-renders.
      </Text>

      <Heading>React Redux</Heading>
      <Text>
        React Redux is a state management library that utilizes the Flux
        architecture pattern. It provides a centralized store to manage
        application state, and components connect to specific parts of the store
        using connect or hooks like useSelector. React Redux uses shallow
        equality checks to determine if connected components need to re-render
        when the store state changes. This means that a component will only
        re-render if the part of the state it depends on has changed, not on
        every state update. Redux also implements memoization techniques
        internally to optimize re-renders, ensuring that connected components
        only update when necessary. In summary, React Redux typically avoids
        unnecessary re-renders by using shallow equality checks and memoization,
        while React Context does not have built-in optimizations and will cause
        all consumers to re-render on context updates. However, with careful
        usage and optimization techniques, you can mitigate excessive re-renders
        in both React Context and React Redux.
      </Text>

      <Row justifyContent="center">
        <Button
          label="React Redux example"
          onPress={() => navigation.navigate('redux_example')}
          icon={''}
          extended={false}
        />
        <SizedBox width={10} />
      </Row>
    </Padding>
  );
}

export default ReactReduxMainScreen;
