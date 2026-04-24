import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function PackingList({ item }) {
    const [packed, setPacked] = useState(false);

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => setPacked((current) => !current)}
        >
            <Text style={styles.item}>{item}</Text>
            <Text style={[styles.check, packed && styles.checkVisible]}>✓</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: '100%',
    },
    item: {
        fontSize: 16,
    },
    check: {
        fontSize: 18,
        opacity: 0,
    },
    checkVisible: {
        opacity: 1,
    },
});