import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DestinationCard from './components/DestinationCard';
import PackingList from './components/PackingList';
import WeatherMood from './components/WeatherMood';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Card App</Text>
      <DestinationCard City="Paris" Country="France" />
      <PackingList item="Passport" />
      <PackingList item="Sunglasses" />
      <WeatherMood />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
