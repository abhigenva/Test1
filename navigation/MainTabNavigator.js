import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatingScreen from '../screens/ChatingScreen';
import Wallet from '../screens/Wallet';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Wallet: {
      screen: Wallet
    },
    RSVP: {
      screen: LinksScreen
    },
    Notifications: {
      screen: ChatingScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'RSVP':
            iconName = Platform.OS === 'ios' ? `ios-mail-open${focused ? '' : '-outline'}` : 'md-mail-open';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';
            break;
          case 'Notifications':
            iconName =
              Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications';
            break;
          case 'Wallet':
          iconName =
            Platform.OS === 'ios' ? `ios-card${focused ? '' : '-outline'}` : 'md-card';
          break;
        }
        return (
          <Ionicons
            name={iconName}
            size={32}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
