import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
//import { DrawerNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class MyNavigationDrawer extends Component {

    render(){
      const { navigation } = this.props;

      return (
        <App />
      );
    }
  }

AppRegistry.registerComponent('MyNavigationDrawer', () => App);
