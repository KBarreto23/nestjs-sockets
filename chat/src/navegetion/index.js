import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavagitor from './stackNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavagitor />
    </NavigationContainer>
  );
}
