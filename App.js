import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChoiceLanguageScreen from './screens/ChoiceLanguageScreen';
import  ChooseDialectScreen from './screens/ChooseDialectScreen';

export default function App() {
  return (
      <ChooseDialectScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
