import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import AssetExample from './components/AssetExample';
import { createDrawerNavigator } from '@react-navigation/drawer';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import VENTANA1 from './config';

export default function App() {
  return (
    <View style={styles.contenedor}>
      <VENTANA1 />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#97B6C0',
    justifyContent: 'center',
    flex: 1,
  },
});
