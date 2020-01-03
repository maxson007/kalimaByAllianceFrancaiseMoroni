import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChoiceLanguageScreen from './screens/ChoiceLanguageScreen';
import  ChooseDialectScreen from './screens/ChooseDialectScreen';
import WhyLearningScreen from './screens/WhyLearningScreen';
import ChooseThemeScreen from './screens/ChooseThemeScreen';
import TranslationScreen from './screens/TranslationScreen';

export default function App() {
  return (
      <TranslationScreen/>
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
