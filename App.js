import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./src/pages/home/home";
import CardSelect from "./src/pages/card-select/card-select";
import TeamsPage from "./src/pages/teams/teams";
import InformationPage from "./src/pages/informationPage/informationPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="teamsPage" component={TeamsPage} />
        <Stack.Screen name="cardSelect" component={CardSelect} />
        <Stack.Screen name="informationPage" component={InformationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
