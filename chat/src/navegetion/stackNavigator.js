import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogingScreen from '../screen/loging/LogingScreen';
import TabNavagitor from './tabNavigator';
import Chat from '../screen/chat/Chat';
export default function StackNavagitor() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LogingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavagitor}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: '#004282',
        }}
      />
    </Stack.Navigator>
  );
}
