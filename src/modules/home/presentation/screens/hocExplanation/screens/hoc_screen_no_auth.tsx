import React from 'react';
import {View} from 'react-native';
import {Heading} from '../../../../../../common/presentation/components/molecules';
import {Text} from '../../../../../../common/presentation/components/atoms';
import withAuthentication, {Profile} from '../with_authentication_hoc';

interface MyScreenProps {
  profile: Profile;
}

function ProfileScreen(props: MyScreenProps) {
  const {profile} = props;
  return (
    <View>
      <Heading>Profile</Heading>
      <Text>Name: {profile.name}</Text>
      <Text>Last Name: {profile.lastName}</Text>
      <Text>Email: {profile.email}</Text>
    </View>
  );
}

// Uso del HOC
const ProfileScreenWithAuthValidation = withAuthentication(ProfileScreen);

export default ProfileScreenWithAuthValidation;
