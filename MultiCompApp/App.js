import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProfileCard from './components/ProfileCard';
import MoodTracker from './components/MoodTracker';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name="John Doe" role="Software Engineer" />
      
          <ProfileCard name="Daniel Hadfield" role="Software Developer" />
          <MoodTracker />
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
