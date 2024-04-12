// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import {Appearance, useColorScheme} from 'react-native';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

jest.mock('react-native-gesture-handler', () => {});

let mockCurrentColorScheme = 'light';
const mockAppearanceEventEmitter = new EventEmitter();
const mockGetColorScheme = jest.fn(() => mockCurrentColorScheme);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useRef: jest.fn(),
  forwardRef: jest.fn(),
}));

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

/**
 * @see {@link https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Utilities/Appearance.js}
 */
jest.mock('react-native/Libraries/Utilities/Appearance', () => {
  return {
    getColorScheme: mockGetColorScheme,

    addChangeListener: listener => {
      return mockAppearanceEventEmitter.addListener('change', listener);
    },

    setColorScheme: colorScheme => {
      mockCurrentColorScheme = colorScheme;
      mockAppearanceEventEmitter.emit('change', {colorScheme});
    },
  };
});
