import {screen} from '@testing-library/react-native';

import {AppTestRender} from '../../jest/customRenders/appRender';
import {Appearance} from 'react-native';

describe('Home Main', () => {
  Appearance.setColorScheme('light');
  it('renders correctly', () => {
    AppTestRender();
    // expect(screen.getByText('Hello, world!')).toBeDefined();
  });
  /*it('navigates to context main screen', () => {
    AppTestRender(<MainStack />);
    const button = screen.getByTestId('explanations_list');
    expect(button).toBeDefined();
    //fireEvent.click(screen.getByText('Increment'));
    //expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });*/
});
