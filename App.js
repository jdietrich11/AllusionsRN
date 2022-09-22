import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./src/pages/home/home";
import CardSelectPage from "./src/pages/card-select/card-select";
import TeamsPage from "./src/pages/teams/teams";
import InformationPage from "./src/pages/informationPage/informationPage";
import PlayerTurnPage from "./src/pages/playerTurn/playerTurn";
import ScoreScreenPage from "./src/pages/scoreScreen/scoreScreen";
import EndGamePage from "./src/pages/endGame/endGame";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="TeamsPage" component={TeamsPage} />
        <Stack.Screen name="CardSelectPage" component={CardSelectPage} />
        <Stack.Screen name="InformationPage" component={InformationPage} />
        <Stack.Screen name="PlayerTurnPage" component={PlayerTurnPage} />
        <Stack.Screen name="ScoreScreenPage" component={ScoreScreenPage} />
        <Stack.Screen name="EndGamePage" component={EndGamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
