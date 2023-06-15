import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/themes/colors';
import { spacing } from './src/themes/spacing';
import { useFonts } from 'expo-font';
import Text from './src/components/Text'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text preset='h3' style={{marginHorizontal:10}}>Open up App.js to start</Text>
      <Text style={{marginHorizontal:10}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },
});
