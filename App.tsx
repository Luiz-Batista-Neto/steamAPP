
import { StyleSheet, View } from 'react-native';
import Tela2Cadastro from './src/cadastro';
import Tela1Login from './src/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Tela1Login/>
      {/* <Tela2Cadastro/> */}
      
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
