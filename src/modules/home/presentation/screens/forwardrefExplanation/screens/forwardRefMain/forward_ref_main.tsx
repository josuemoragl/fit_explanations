import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  Padding,
  Row,
  SizedBox,
  Text,
} from '../../../../../../../common/presentation/components/atoms';
import {
  Button,
  Heading,
} from '../../../../../../../common/presentation/components/molecules';

function ReactForwardRefMainScreen() {
  const navigation = useNavigation<any>();
  return (
    <Padding paddingHorizontal={10} paddingVertical={10}>
      <Heading>React ForwardRef</Heading>
      <Text>
        forwardRef is a higher-order component (HOC) in React that allows you to
        pass a ref prop from a parent component to a child component, even if
        the child component is a function component. This is particularly useful
        when you need to access or manipulate the DOM node or a React element
        created by the child component directly from the parent component.
      </Text>

      <Heading>why to use React ForwardRef</Heading>

      <Text>
        Cleaner API: forwardRef allows you to maintain a cleaner API by avoiding
        the need for additional props to pass ref. Component Composition: It
        enables better composition of components, especially when you're using
        third-party libraries or when you want to separate concerns in your own
        components. Accessing DOM elements or React elements: It provides a way
        to access the DOM nodes or React elements created by child components
        directly from the parent component, which can be useful for various use
        cases like focusing an input field or measuring the dimensions of a
        component.
      </Text>
      <SizedBox height={30} />
      <Row justifyContent="center">
        <Button
          label="With ForwardRef"
          onPress={() => navigation.navigate('with_forward_ref')}
          icon={''}
          extended={false}
        />
        <SizedBox width={10} />
        <Button
          label="Without ForwardRef"
          onPress={() => navigation.navigate('without_forward_ref')}
          icon={''}
          extended={false}
        />
      </Row>
    </Padding>
  );
}

export default ReactForwardRefMainScreen;
