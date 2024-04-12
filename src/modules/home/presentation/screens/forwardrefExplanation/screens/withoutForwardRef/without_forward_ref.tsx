import React, {useState} from 'react';
import {Button} from '../../../../../../../common/presentation/components/molecules';
import {Text, View} from 'react-native';
import {
  Center,
  SizedBox,
} from '../../../../../../../common/presentation/components/atoms';
import {NestedChildOne} from '../../../contextExplanation/components/nested_children';
import StateBottomSheet from '../../../../../../../common/presentation/components/organisms/StateBottomSheet';

function WithoutForwardRefScreen() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <View>
        <Button
          icon={''}
          label={'Show Bottom Sheet'}
          extended={false}
          onPress={() => setIsVisible(prevState => !prevState)}
        />
        <NestedChildOne name={'Josue'} lastName={'Mora'} />
      </View>
      <StateBottomSheet
        snapPoints={['50%']}
        isVisible={isVisible}
        enableDynamicSizing
        onDismiss={() => setIsVisible(false)}>
        <SizedBox height={400}>
          <Center>
            <Text>That's a BottomSheet</Text>
          </Center>
        </SizedBox>
      </StateBottomSheet>
    </>
  );
}

export default WithoutForwardRefScreen;
