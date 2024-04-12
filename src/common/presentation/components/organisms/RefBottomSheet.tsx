import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {SharedValue} from 'react-native-reanimated';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

interface RefBottomSheetProps {
  ref: React.RefObject<BottomSheetModalMethods>;
  children: React.ReactNode;
  enableDynamicSizing?: boolean;
  onDismiss: () => void;
  snapPoints?:
    | (string | number)[]
    | SharedValue<(string | number)[]>
    | Readonly<(string | number)[] | SharedValue<(string | number)[]>>
    | undefined;
}

export interface RefBottomSheetRef {
  open: () => void;
  close: () => void;
}
const RefBottomSheet = forwardRef(function RefBottomSheet(
  props: RefBottomSheetProps,
  ref,
) {
  const {snapPoints = []} = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetModalRef.current?.present(),
    close: () => bottomSheetModalRef.current?.close(),
  }));

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        onDismiss={props.onDismiss}
        ref={bottomSheetModalRef}
        style={styles.container}
        enableDynamicSizing={true}
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          {props.children}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default RefBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
