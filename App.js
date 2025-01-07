import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import { FlatList } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState([
    { id: '1', content: 'Note1' },
    { id: '2', content: 'Note2' },
    { id: '3', content: 'Note3' },
  ]);

  return (
    <View style={styles.container}>
      <Header title="NotesApp" />
      <h1>NotesApp</h1>
      <FlatList
        data={notes} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text style={styles.noteText}>{item.content}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
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
