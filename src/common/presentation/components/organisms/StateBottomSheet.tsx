import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {SharedValue} from 'react-native-reanimated';
interface StateBottomSheetProps {
  isVisible: boolean;
  children: React.ReactNode;
  enableDynamicSizing?: boolean;
  onDismiss: () => void;
  snapPoints?:
    | (string | number)[]
    | SharedValue<(string | number)[]>
    | Readonly<(string | number)[] | SharedValue<(string | number)[]>>
    | undefined;
}
export default function StateBottomSheet(props: StateBottomSheetProps) {
  const {isVisible, snapPoints = ['90%']} = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isVisible]);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          onDismiss={props.onDismiss}
          ref={bottomSheetModalRef}
          index={1}
          enableDynamicSizing={props.enableDynamicSizing}
          snapPoints={snapPoints}>
          <BottomSheetView style={styles.contentContainer}>
            {props.children}
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 0,
    alignItems: 'center',
  },
});
