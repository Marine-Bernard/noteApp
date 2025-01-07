import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import NoteItem from './components/NoteItem';
import { FlatList, TextInput } from 'react-native-web';
import { useState } from 'react';
import AddNote from './components/AddNote';


export default function App() {
  const [notes, setNotes] = useState([
    { id: '1', content: 'Note1', icon: 'code' },
    { id: '2', content: 'Note2', icon: 'book' },
    { id: '3', content: 'Note3', icon: 'favorite' },
    { id: '4', content: 'Note4', icon: 'code' },
  ]);
  
  return (
    <View style={styles.container}>
      <Header title="NotesApp" />
      <h1>NotesApp</h1>
      <FlatList
        data={notes} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <NoteItem item={item} />
        )}
      />
      <AddNote notes={notes} setNotes={setNotes} />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  AddNote: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
