import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import { FlatList } from 'react-native-web';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

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
          <View style={styles.note}>
            <MaterialIcons name={item.icon} size={24} color="#00796b" style={styles.icon} />
            <Text style={styles.noteText}>{item.content}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
