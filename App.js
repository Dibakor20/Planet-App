import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/themes/colors";
import { spacing } from "./src/themes/spacing";
import { useFonts } from "expo-font";
import Text from "./src/components/Text";
import { NavigationContainer,DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
