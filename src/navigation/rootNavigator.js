import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ROUTES } from './routes';
import { Home } from '../modules/Home';
import { Login } from '../modules/Login';

class Switch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loadingNavigator();
  }

  loadingNavigator() {
    // is auth or not logic here
    // hide splashscreen here
    this.props.navigation.navigate(ROUTES.LOGIN_ROUTE);
  }

  render() {
    // render a full loading page here
    return <View />;
  }
}

const RootNavigator = createSwitchNavigator(
  {
    Switch: Switch,
    [ROUTES.LOGIN_ROUTE]: Login,
    [ROUTES.HOME_ROUTE]: Home,
  },
  {
    initialRouteName: 'Switch',
    headerMode: 'none',
  }
);

export default createAppContainer(RootNavigator);

