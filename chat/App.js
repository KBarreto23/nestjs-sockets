import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import Navigation from './src/navegetion';
export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
