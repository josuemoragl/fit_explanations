import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  Button,
  Heading,
} from '../../../../../../common/presentation/components/molecules';
import {
  Padding,
  SizedBox,
  Text,
} from '../../../../../../common/presentation/components/atoms';
import {StyleSheet, View} from 'react-native';
import useInterval from '../../../../infrastructure/hooks/useInterval';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {calculatePrimesInRange} from '../../../../../../common/infrastructure/utils/expensive';
import HighlightView from '../../../../../../common/presentation/components/molecules/HightLightedView';
import {useTheme} from '../../../../../../common/presentation/theme';

export default function WithUseCallbackScreen() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useInterval(() => {
    setCounter(prevState => prevState + 1);
  }, 2000); //

  const calculePrimeNumbers = useCallback(() => {
    console.log('calculePrimeNumbers');
    return calculatePrimesInRange(start, end);
  }, [start, end]);

  return (
    <View style={styles.main}>
      <Heading>
        React memoization methods (UseCallback, memo and useMemo)
      </Heading>
      <Text>
        To improve performance we can memoize values to avoid re-renders. In
        this case page has a state counter state value, that's value changes 2
        seconds. We also have two more state values: start, end, those states
        are used to send information to calculatePrimesInRange function, that,
        could be a heavy expensive function, to ontain primes number bewteen a
        range of two numbers, the start and end. Nested child one and nested
        child two don't need to use any memoization method even if it's parent
        re-renders every 2 seconds, because both of they does not do any
        expensive calculation in every re-render
      </Text>
      <View style={styles.centered}>
        <Heading>Counter is: {counter}</Heading>
        <Formik
          initialValues={{start: '', end: ''}}
          onSubmit={values => {
            setStart(parseInt(values.start, 10));
            setEnd(parseInt(values.end, 10));
          }}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <SizedBox height={20} />
              <TextInput
                onChangeText={handleChange('start')}
                value={values.start}
                label="Start number"
              />
              <SizedBox height={10} />
              <TextInput
                onChangeText={handleChange('end')}
                value={values.end}
                label="End number"
              />

              <SizedBox height={10} />
              <Button
                icon={''}
                label={'Update values'}
                extended={false}
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>
      </View>
      <NestedChildOne
        makeWhatever={calculePrimeNumbers}
        name="Josué"
        lastName={'Mora'}
      />
    </View>
  );
}

interface ChildComponentOneProps {
  makeWhatever: () => any;
}
function ChildComponentOne(props: ChildComponentOneProps) {
  const {makeWhatever} = props;

  const getPrimeNumbers = useCallback(() => {
    console.log('calculating prime numbers');
    return makeWhatever();
  }, [makeWhatever]);

  const primeNumbers = useMemo(() => getPrimeNumbers(), [getPrimeNumbers]);

  return (
    <HighlightView>
      <Heading>Prime numbers are</Heading>
      <Text>{Array.isArray(primeNumbers) ? primeNumbers.join(',') : ''}</Text>
    </HighlightView>
  );
}

function NestedChildOne(props: any) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child two</Heading>
        <NestedChildTwo {...props} />
      </HighlightView>
    </Padding>
  );
}

function NestedChildTwo(props: any) {
  return (
    <Padding padding={10}>
      <HighlightView>
        <Heading>Nested child two</Heading>
        <NestedChildThree {...props} />
      </HighlightView>
    </Padding>
  );
}

const NestedChildThree = memo(function NestedChildThree(props: any) {
  const theme = useTheme();
  return (
    <Padding padding={10}>
      <HighlightView color={theme.colorScheme.background.value}>
        <Heading>Nested child three with expensive function</Heading>
        <ChildComponentOne {...props} />
      </HighlightView>
    </Padding>
  );
});

const styles = StyleSheet.create({
  centered: {marginVertical: 20},
  main: {
    paddingHorizontal: 10,
  },
});
