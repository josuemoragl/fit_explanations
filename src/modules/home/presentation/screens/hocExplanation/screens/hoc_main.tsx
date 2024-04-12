import React from 'react';
import {
  Button,
  Heading,
} from '../../../../../../common/presentation/components/molecules';
import {
  SizedBox,
  Text,
} from '../../../../../../common/presentation/components/atoms';
import {StyleSheet, View} from 'react-native';
import {hocRoutes} from '../navigation/hoc_routes';
import {useNavigation} from '@react-navigation/native';

function HOCMainScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.main}>
      <Heading>High Order Components (HOCs)</Heading>
      <Text>
        Un HOC (Higher Order Component) es una función que toma un componente y
        devuelve un nuevo componente con funcionalidades adicionales. Se
        utilizan comúnmente en React para reutilizar lógica entre componentes.
      </Text>
      <SizedBox height={20} />
      <Button
        label="Go to profile screen with existing auth"
        onPress={() => navigation.navigate(hocRoutes.howAuthenticationScreen)}
        icon={''}
        extended={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
});

export default HOCMainScreen;
