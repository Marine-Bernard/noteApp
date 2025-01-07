import { StatusBar } from 'expo-status-bar';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import NoteItem from './components/NoteItem';
import { FlatList, TextInput } from 'react-native-web';
import { useState } from 'react';
import AddNote from './components/AddNote';


export default function App() {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  const [notes, setNotes] = useState([
    { id: '1', content: 'Note1', icon: 'code' },
    { id: '2', content: 'Note2', icon: 'book' },
    { id: '3', content: 'Note3', icon: 'favorite' },
    { id: '4', content: 'Note4', icon: 'code' },
  ]);

  const deleteNote = (id) => {
    if (isMobile) {
    Alert.alert(
      "Confirmer la suppression",
      "Êtes-vous sûr de vouloir supprimer cette note ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        {
          text: "Supprimer",
          onPress: () => {
            setNotes(notes.filter((note) => note.id !== id));
          },
        },
      ],
      { cancelable: true } 
    );
  }else {
    const confirmDeletion = window.confirm("Êtes-vous sûr de vouloir supprimer cette note ?");
    if (confirmDeletion) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  }
  }
  
  return (
    <View style={styles.container}>
      <Header title="NotesApp" />
      <h1>NotesApp</h1>
      <FlatList
        data={notes} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <NoteItem item={item} fonction={deleteNote} />
        )}
      />
      <AddNote notes={notes} setNotes={setNotes} />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
