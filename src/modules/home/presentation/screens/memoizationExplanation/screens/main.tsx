import React from 'react';
import {Background} from '../../../../../../common/presentation/components/atoms';
import {Explanations} from '../../../components/Explanations';
import {memoizationData} from '../data';
import {StyleSheet} from 'react-native';

function MemoizationMainScreen() {
  return (
    <Background style={styles.main}>
      <Explanations data={memoizationData.explanations} />
    </Background>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});

export default MemoizationMainScreen;
