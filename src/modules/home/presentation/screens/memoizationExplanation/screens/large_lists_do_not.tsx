import React, {useState} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {List} from 'react-native-paper';
import {Button} from '../../../../../../common/presentation/components/molecules';

function LargeListDoNot() {
  const [data, setData] = useState<any>([]);

  const createData = () => {
    const items = Array.from({length: 10}, (_, index) => ({
      id: index + 1,
      label: `Label ${index + 1}`,
    }));
    setData(items);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        onPress={createData}
        label="Create List"
        icon={''}
        extended={false}
      />
      <ScrollView>
        {data.map((item: any) => (
          <List.Item title={item.label} description={item.label} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LargeListDoNot;
