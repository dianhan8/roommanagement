import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { Root } from 'native-base'
<<<<<<< HEAD
import SplashScreen from 'react-native-splash-screen'
=======

>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
import RootNavigator from './src/navigator'

import { store } from './src/redux/store';

const AppNav = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.router
});

const AppWithNavigationState = connect(mapStateToProps)(AppNav);
export default class App extends Component {
<<<<<<< HEAD
  componentDidMount(){
    SplashScreen.hide();
  }
=======
>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppWithNavigationState />
        </Root>
      </Provider>
    );
  }
}