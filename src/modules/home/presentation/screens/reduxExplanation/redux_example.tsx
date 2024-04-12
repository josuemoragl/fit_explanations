import React from 'react';

import {View} from 'react-native';
import {
  Padding,
  SizedBox,
} from '../../../../../common/presentation/components/atoms';
import {Heading} from '../../../../../common/presentation/components/molecules';
import {NestedChildOne} from './components';
import useReduxExampleScreen from './use_redux_example';
import styles from '../contextExplanation/screens/styles';
import {store} from '../../../../../common/infrastructure/redux/store';
import {Provider} from 'react-redux';
import UserForm from '../contextExplanation/components/user_form';

function ReactRexuxExampleScreen() {
  const {updateValues} = useReduxExampleScreen();
  return (
    <View style={styles.main}>
      <SizedBox height={30} />
      <Padding paddingHorizontal={20}>
        <Heading>Use of Redux toolkit</Heading>
        <UserForm updateValues={updateValues} />
        <SizedBox height={10} />
        <NestedChildOne />
      </Padding>
    </View>
  );
}

export default function ReactRexuxExampleScreenWrapper(): React.ReactElement {
  return (
    <Provider store={store}>
      <ReactRexuxExampleScreen />
    </Provider>
  );
}
