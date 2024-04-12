import React, {useRef} from 'react';
import {Button} from '../../../../../../../common/presentation/components/molecules';
import {Text, View} from 'react-native';
import {
  Center,
  SizedBox,
} from '../../../../../../../common/presentation/components/atoms';
import {NestedChildOne} from '../../../contextExplanation/components/nested_children';
import RefBottomSheet, {
  RefBottomSheetRef,
} from '../../../../../../../common/presentation/components/organisms/RefBottomSheet';

function WithForwardRefScreen() {
  const refBottomSheet = useRef<RefBottomSheetRef>();

  return (
    <>
      <View>
        <Button
          icon={''}
          label={'Show Bottom Sheet'}
          extended={false}
          onPress={() => refBottomSheet.current?.open()}
        />
        <NestedChildOne name={'Josue'} lastName={'Mora'} />
      </View>
      <RefBottomSheet
        snapPoints={['50%']}
        ref={refBottomSheet}
        enableDynamicSizing
        onDismiss={() => refBottomSheet.current?.close()}>
        <SizedBox height={400}>
          <Center>
            <Text>That's a BottomSheet</Text>
          </Center>
        </SizedBox>
      </RefBottomSheet>
    </>
  );
}

export default WithForwardRefScreen;
