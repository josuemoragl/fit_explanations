import {Formik} from 'formik';
import React from 'react';
import {SizedBox} from '../../../../../../common/presentation/components/atoms';
import {TextInput} from 'react-native-paper';
import {Button} from '../../../../../../common/presentation/components/molecules';

interface UserFormProps {
  updateValues: (values: any) => void;
}

function UserForm({updateValues}: UserFormProps) {
  return (
    <Formik
      initialValues={{name: '', lastName: ''}}
      onSubmit={values => updateValues(values)}>
      {({handleChange, handleSubmit, values}) => (
        <>
          <SizedBox height={20} />
          <TextInput
            onChangeText={handleChange('name')}
            value={values.name}
            label="Name"
          />
          <SizedBox height={10} />
          <TextInput
            onChangeText={handleChange('lastName')}
            value={values.lastName}
            label="Last Name"
          />

          <SizedBox height={10} />
          <Button
            icon={''}
            label={'Update values'}
            extended={false}
            onPress={() => handleSubmit()}
          />
        </>
      )}
    </Formik>
  );
}

export default UserForm;
