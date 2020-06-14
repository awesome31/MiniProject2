import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../pages/home.screen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Tab1 from '../pages/tab1.screen';
import Tab2 from '../pages/tab2.screen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Drawer1 from '../pages/drawer1.screen';
import Drawer2 from '../pages/drawer2.screen';
import {Text} from 'react-native';

const Drawernavigator = createDrawerNavigator(
  {
    Drawer1: Drawer1,
    Drawer2: Drawer2,
  },
  {
    initialRouteName: 'Drawer1',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {screen: Tab1},
    Tab2: {screen: Tab2},
  },
  {
    initialRouteName: 'Tab1',
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#4388D6',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 19,
        height: '100%',
        textAlignVertical: 'center',
        borderRightWidth: 1,
      },
      indicatorStyle: {
        borderBottomWidth: 2,
      },
      alignItems: 'center',
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    Main: HomeScreen,
    Drawer: Drawernavigator,
    Tab: TabNavigator,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    },
  },
);

export const AppNavigator = createAppContainer(MainNavigator);
