import { View, Text, Pressable } from "react-native";

import endGameStyles from "./endGame.styles";

function EndGamePage() {
  return (
    <View style={endGameStyles.endGameContainer}>
      <View style={endGameStyles.gameOverContainer}>
        <Text style={endGameStyles.gameOverText}>Game Over</Text>
      </View>
      <View style={endGameStyles.awardsContainer}>
        <Text style={endGameStyles.awardText}>Fastest Talker: {"AJ"}</Text>
        <Text style={endGameStyles.awardText}>
          Best One Word Pony: {"Jill"}
        </Text>
        <Text style={endGameStyles.awardText}>
          Best Hand and Body Flapper: {"Johnson"}
        </Text>
        <Text style={endGameStyles.awardText}>
          Fastest Right Answer: {"Doug"}
        </Text>
      </View>
      <View style={endGameStyles.buttons}>
        <Pressable style={endGameStyles.bttn}>
          <Text style={endGameStyles.buttonText}>Play Again</Text>
        </Pressable>
        <Pressable style={endGameStyles.bttn}>
          <Text style={endGameStyles.buttonText}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default EndGamePage;
