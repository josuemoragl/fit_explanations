import React, {useContext, useState} from 'react';
import {
  Padding,
  SizedBox,
} from '../../../../../../../common/presentation/components/atoms';

import {Heading} from '../../../../../../../common/presentation/components/molecules';
import {View} from 'react-native';
import useDoScreen from './use_do_screen';
import styles from '../styles';
import {NestedChildOne} from './components';
import UserForm from '../../components/user_form';

interface User {
  name: string;
  lastName: string;
}

interface IScreenContext {
  user: User;
  setUser: (user: User) => void;
}

const defaultUserValue = {name: '', lastName: ''};

const ScreenContext = React.createContext<IScreenContext>({
  user: defaultUserValue,
  setUser: () => undefined,
});

function ReactContextDoScreen() {
  const {updateValues} = useDoScreen();
  return (
    <View style={styles.main}>
      <SizedBox height={30} />
      <Padding paddingHorizontal={20}>
        <Heading>Use of context</Heading>
        <UserForm updateValues={updateValues} />
        <SizedBox height={10} />
        <NestedChildOne />
      </Padding>
    </View>
  );
}

export default function ScreenContextProvider() {
  const [user, setUser] = useState<User>({name: '', lastName: ''});
  return (
    <ScreenContext.Provider value={{user, setUser}}>
      <ReactContextDoScreen />
    </ScreenContext.Provider>
  );
}

export function useScreenContext() {
  const screenContext = useContext(ScreenContext);
  return screenContext;
}
