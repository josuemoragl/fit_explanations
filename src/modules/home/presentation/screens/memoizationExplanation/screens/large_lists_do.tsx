import React, {memo, useCallback, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {List} from 'react-native-paper';
import {Button} from '../../../../../../common/presentation/components/molecules';
import RefBottomSheet, {
  RefBottomSheetRef,
} from '../../../../../../common/presentation/components/organisms/RefBottomSheet';
import {Text} from '../../../../../../common/presentation/components/atoms';

interface Todo {
  userId: number;
  id: number;
  title: number;
  completed: boolean;
}

function LargeListDo() {
  const bottomSheetRef = useRef<RefBottomSheetRef>();
  const [todo, setTodo] = useState<Todo | undefined>();

  const loadTodo = useCallback((index: number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then(response => response.json())
      .then(json => {
        setTodo(json);
        bottomSheetRef.current?.open();
      });
  }, []);

  return (
    <View>
      <LargeListDoList loadTodo={loadTodo} todo={todo} />
      <RefBottomSheet
        ref={bottomSheetRef}
        onDismiss={() => bottomSheetRef.current?.close()}>
        <View style={{flex: 0}}>
          <Text>User Id: {todo?.userId}</Text>
          <Text>todo Id: {todo?.id}</Text>
          <Text>Title: {todo?.title}</Text>
          <Text>Completed: {todo?.completed}</Text>
        </View>
      </RefBottomSheet>
    </View>
  );
}

interface LargeListDoListProps {
  loadTodo: (index: number) => void;
  todo: Todo | undefined;
}

function LargeListDoList({loadTodo}: LargeListDoListProps) {
  const [data, setData] = useState<any>([]);
  const createData = () => {
    const items = Array.from({length: 10000}, (_, index) => ({
      id: index + 1,
      label: `Label ${index + 1}`,
    }));
    setData(items);
  };

  return (
    <View>
      <Button
        onPress={createData}
        label="Create List"
        icon={''}
        extended={false}
      />

      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Item item={item} loadTodo={() => loadTodo(index)} />
        )}
      />
    </View>
  );
}

const Item = memo(function Item({item, loadTodo}: any) {
  return (
    <List.Item title={item.label} description={item.label} onPress={loadTodo} />
  );
});

export default LargeListDo;
