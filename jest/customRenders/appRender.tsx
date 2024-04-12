import React from 'react';

import {render} from '@testing-library/react-native';

import AppWrapper from '../../App';

export const AppTestRender = (): any => {
  return render(<AppWrapper />);
};
