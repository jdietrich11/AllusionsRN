import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./src/pages/home/home";
import CardSelect from "./src/pages/card-select/card-select";
import TeamsPage from "./src/pages/teams/teams";
import InformationPage from "./src/pages/informationPage/informationPage";
import PlayerTurnPage from "./src/pages/playerTurn/playerTurn";
import ScoreScreenPage from "./src/pages/scoreScreen/scoreScreen";

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
        <Stack.Screen name="playerTurnPage" component={PlayerTurnPage} />
        <Stack.Screen name="ScoreScreenPage" component={ScoreScreenPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
