import React, { Fragment, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListChat from '../screen/chat/ListChat';
import { Icon } from 'react-native-eva-icons';
import SettingsScreen from '../screen/settings/SettingsScreen';
export default function TabNavagitor() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 80 },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ListChat}
        options={{
          tabBarActiveTintColor: '#004282',
          tabBarInactiveTintColor: '#949494',
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="message-circle-outline"
              height="30"
              width="30"
              fill={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarActiveTintColor: '#004282',
          tabBarInactiveTintColor: '#949494',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="settings-2-outline"
              height="30"
              width="30"
              fill={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
