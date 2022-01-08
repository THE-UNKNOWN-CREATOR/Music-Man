import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteInfo from "./NoteInfo"
import AppHeader from "./AppHeader"
import Notes from './Notes';
import Controls from './Controls';
import Music from './Music.json';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppHeader/>
        <NoteInfo />
        <Notes />
        <Controls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1
  },
});
