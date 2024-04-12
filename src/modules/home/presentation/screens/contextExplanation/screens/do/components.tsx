import React from 'react';
import {
  Padding,
  Text,
} from '../../../../../../../common/presentation/components/atoms';
import HighlightView from '../../../../../../../common/presentation/components/molecules/HightLightedView';
import {Heading} from '../../../../../../../common/presentation/components/molecules';
import {useScreenContext} from './do_screen';

export function NestedChildOne() {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child one</Heading>
        <NestedChildTwo />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildTwo() {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child two</Heading>
        <NestedChildThree />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildThree() {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child three</Heading>
        <NestedChildFour />
      </HighlightView>
    </Padding>
  );
}

export function NestedChildFour() {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child four</Heading>
        <NestedChildFive />
      </HighlightView>
    </Padding>
  );
}

function NestedChildFive() {
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
