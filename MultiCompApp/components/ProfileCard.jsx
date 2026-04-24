import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
export default function ProfileCard({name,role}) {
    const [follow, setFollow] = useState(true);
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>setFollow(!follow)}>
                <Text style={styles.buttonText}>
                    {follow ? 'Follow' : 'Following'}
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
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});