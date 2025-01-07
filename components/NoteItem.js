import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoteItem = ({ item }) => {
    console.log(item);
  return (
    <View style={styles.note}>
      <MaterialIcons name={item.icon} size={24} color="#00796b" style={styles.icon} />
      <Text style={styles.noteText}>{item.content}</Text>
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
    noteText: {
        fontSize: 20,
        marginLeft: 30,
    },
    icon: {
        position: 'absolute',
        left: 10,

    }
    });

export default NoteItem;