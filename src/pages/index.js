import { Navigation } from 'react-native-navigation';

import HomePage from './HomePage';
import CartPage from './CartPage';
import MessagePage from './MessagePage';
import UserPage from './UserPage';
import WhishListPage from './WhishListPage';
import SearchPage from './SearchPage';
import DetailsMessage from './DetailsMessage';
import CategoryPage from './CategoryPage';
import InteractableExample from './InteractableExample';
import OrderUserPage from './OrderUserPage';
import ProductPage from './ProductPage';
import ProductsPage from './ProductsPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RegisterPageNext from './RegisterPageNext';
import PasswordRecoveryPage from './PasswordRecoveryPage';
import CheckoutPage from './CheckoutPage';

// register all screens of the app (including internal ones)
export function registerPages() {
  Navigation.registerComponent('expose.HomePage', () => HomePage);
  Navigation.registerComponent('expose.CartPage', () => CartPage);
  Navigation.registerComponent('expose.MessagePage', () => MessagePage);
  Navigation.registerComponent('expose.UserPage', () => UserPage);
  Navigation.registerComponent('expose.WhishListPage', () => WhishListPage);
  Navigation.registerComponent('expose.SearchPage', () => SearchPage);
  Navigation.registerComponent('expose.DetailsMessage', () => DetailsMessage);
  Navigation.registerComponent('expose.CategoryPage', () => CategoryPage);
  Navigation.registerComponent('expose.InteractableExample', () => InteractableExample);
  Navigation.registerComponent('expose.OrderUserPage', () => OrderUserPage);
  Navigation.registerComponent('expose.ProductPage', () => ProductPage);
  Navigation.registerComponent('expose.ProductsPage', () => ProductsPage);
  Navigation.registerComponent('expose.PrivacyPage', () => PrivacyPage);
  Navigation.registerComponent('expose.TermsPage', () => TermsPage);
  Navigation.registerComponent('expose.LoginPage', () => LoginPage);
  Navigation.registerComponent('expose.RegisterPage', () => RegisterPage);
  Navigation.registerComponent('expose.RegisterPageNext', () => RegisterPageNext);
  Navigation.registerComponent('expose.PasswordRecoveryPage', () => PasswordRecoveryPage);
  Navigation.registerComponent('expose.CheckoutPage', () => CheckoutPage);
}
