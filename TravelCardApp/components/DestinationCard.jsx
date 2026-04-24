import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function DestinationCard({City,Country}) {
    const [save, setSave] = useState(true);
    return (
        <View style={styles.card}>
            <Text style={styles.city}>{City}</Text>
            <Text style={styles.country}>{Country}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>setSave(!save)}>
                <Text style={styles.buttonText}>
                    {save ? 'Save Destination' : 'Saved'}
                </Text>
            </TouchableOpacity>
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
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  country: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
