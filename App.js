import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, SafeAreaView, Animated } from 'react-native';
import Tabs from './src/Tabs';


const imagenes =[

];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ESPACIO_CONTENEDER = width * 0.7;
const ESPACIO = 10;

export default function App() {
  return <Tabs />;
  <SafeAreaView style={StyleSheet.container}>
  <StatusBar hidden/>
  
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  }
});
