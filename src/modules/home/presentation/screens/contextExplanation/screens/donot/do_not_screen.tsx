import React from 'react';
import {
  Padding,
  SizedBox,
} from '../../../../../../../common/presentation/components/atoms';
import {Heading} from '../../../../../../../common/presentation/components/molecules';
import {View} from 'react-native';
import {NestedChildOne} from '../../components/nested_children';
import styles from '../styles';
import useDoNotScreen from './use_do_not_screen';
import UserForm from '../../components/user_form';

function ReactContextDoNotScreen() {
  const {name, lastName, updateValues} = useDoNotScreen();
  return (
    <View style={styles.main}>
      <SizedBox height={30} />
      <Padding paddingHorizontal={20}>
        <Heading>Use of context</Heading>
        <UserForm updateValues={updateValues} />
        <SizedBox height={10} />
        <NestedChildOne name={name} lastName={lastName} />
      </Padding>
    </View>
  );
}

export default ReactContextDoNotScreen;
