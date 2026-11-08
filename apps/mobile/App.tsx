import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>AURUM</Text>
      <Text style={styles.title}>Customer app scaffold</Text>
      <Text style={styles.copy}>
        Discovery, booking requests and account flows will be added in later
        phases. This client stays untrusted: no server or payment secrets here.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1eb',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    letterSpacing: 3,
    fontSize: 12,
    color: '#6b635a',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1c1917',
    marginBottom: 12,
  },
  copy: {
    fontSize: 16,
    lineHeight: 24,
    color: '#44403c',
  },
});
