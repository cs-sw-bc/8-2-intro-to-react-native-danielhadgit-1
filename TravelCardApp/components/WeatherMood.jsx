import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function WeatherMood() {
    const[weather, setWeather] = useState('');
  return (
    <View style={styles.card}>
      <Text style={styles.title}>How is the weather today?</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setWeather('Sunny')}>
          <Text style={styles.emoji}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWeather('Rainy')}>
          <Text style={styles.emoji}>😢</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWeather('Stormy')}>
          <Text style={styles.emoji}>😡</Text>
        </TouchableOpacity>
      </View>
      {weather ? <Text style={styles.moodText}>The weather is {weather}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  title: {
    fontSize: 18,
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