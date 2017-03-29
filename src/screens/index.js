import { Navigation } from 'react-native-navigation';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('expose.FirstPage', () => FirstPage);
  Navigation.registerComponent('expose.SecondPage', () => SecondPage);
}
