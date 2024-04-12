import React from 'react';
import {
  Padding,
  Text,
} from '../../../../../../common/presentation/components/atoms';
import {Heading} from '../../../../../../common/presentation/components/molecules';
import HighlightView from '../../../../../../common/presentation/components/molecules/HightLightedView';
import {useScreenContext} from '../screens/do/do_screen';

interface NestedChildProps {
  name?: string;
  lastName?: string;
}

export function NestedChildOne(props: NestedChildProps) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child one</Heading>
        <NestedChildTwo {...props} />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildTwo(props: NestedChildProps) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child two</Heading>
        <NestedChildThree {...props} />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildThree(props: NestedChildProps) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child three</Heading>
        <NestedChildFour {...props} />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildFour(props: NestedChildProps) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child four</Heading>
        {props.name ? (
          <NestedChildFiveNoContext {...props} />
        ) : (
          <NestedChildFiveWithContext />
        )}
      </HighlightView>
    </Padding>
  );
}

function NestedChildFiveWithContext() {
  const {user} = useScreenContext();
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child five</Heading>
        <Text>Name: {user.name}</Text>
        <Text>LastName: {user.lastName}</Text>
      </HighlightView>
    </Padding>
  );
}

export function NestedChildFiveNoContext(props: NestedChildProps) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child five</Heading>
        <Text>Name: {props.name}</Text>
        <Text>LastName: {props.lastName}</Text>
      </HighlightView>
    </Padding>
  );
}
