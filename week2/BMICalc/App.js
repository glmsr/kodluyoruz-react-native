import { View, Text, StyleSheet } from 'react-native'
import BMICalc from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <BMICalc />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
      },
})