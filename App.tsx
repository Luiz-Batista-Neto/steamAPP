import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela1 from './src/login/bg';

export default function App() {
  return (
    <View style={styles.container}>
      <Tela1/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(27, 40, 56)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
