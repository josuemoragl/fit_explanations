import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store} from '../../src/common/infrastructure/redux/store';
import AppWrapper from '../../App';
// As a basic setup, import your same slice reducers

export function RenderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: any = {},
) {
  const {...renderOptions} = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(<AppWrapper />, {wrapper: Wrapper, ...renderOptions}),
  };
}
