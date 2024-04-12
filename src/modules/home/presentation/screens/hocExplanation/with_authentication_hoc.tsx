import React from 'react';

export interface Profile {
  name: string;
  lastName: string;
  email: string;
}

export default function withAuthentication(
  WrappedComponent: React.ComponentType<any>,
) {
  return function WithAuthentication(props: any) {
    const isAuthenticated = true;
    const profile: Profile = {
      name: 'Josué',
      lastName: 'Mora',
      email: 'josue.mora@globant.com',
    };

    if (!isAuthenticated) {
      return null;
    }

    return (
      <WrappedComponent
        {...props}
        profile={profile}
        isAuthenticated={isAuthenticated}
      />
    );
  };
}
