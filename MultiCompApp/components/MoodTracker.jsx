import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function MoodTracker() {
    const[mood, setMood] = useState('');
  return (
    <View style={styles.card}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setMood('Happy')}>
          <Text style={styles.emoji}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMood('Sad')}>
          <Text style={styles.emoji}>😢</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMood('Angry')}>
          <Text style={styles.emoji}>😡</Text>
        </TouchableOpacity>
      </View>
      {mood ? <Text style={styles.moodText}>You are feeling {mood}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
    textAlign: 'center',
  },
  moodText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
});