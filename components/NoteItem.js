import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoteItem = ({ item, fonction }) => {
  return (
    <View style={styles.note}>
        <View style={styles.noteContent}>
            <MaterialIcons name={item.icon} size={24} color="#CE6E8E" style={styles.icon} />
            <Text style={styles.noteText}>{item.content}</Text>
        </View>
        <View style={styles.Supp}>
            <TouchableOpacity style={styles.button} onPress={() => fonction(item.id)}>
            <MaterialIcons name="delete" size={24} color="#ed4f57" />
            </TouchableOpacity>
            
        </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
    note: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    noteContent: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        padding: 10,
        margin: 10,
    },
    Supp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        padding: 10,  
        height: 50, 
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