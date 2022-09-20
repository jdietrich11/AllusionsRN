import { Text, View, FlatList, Pressable } from "react-native";

import informationPageStyles from "./informationPage.styles";

const Round1Rules = [
  { key: "read description" },
  { key: "make sound effects" },
  { key: "use as many words as needed" },
];

function InformationPage() {
  return (
    <View style={informationPageStyles.informationPageContainer}>
      <View style={informationPageStyles.timerContainer}>
        <Text style={informationPageStyles.timerText}>60 Seconds</Text>
      </View>
      <View style={informationPageStyles.playAreaInfo}>
        <View style={informationPageStyles.skipContainer}>
          <Text style={informationPageStyles.skipText}>skip</Text>
        </View>
        <View style={informationPageStyles.playerRulesContainer}>
          <View style={informationPageStyles.playerNameContainer}>
            <Text style={informationPageStyles.playerName}>Player Turn</Text>
          </View>
          <View style={informationPageStyles.rulesContainer}>
            <Text style={informationPageStyles.rulesTitle}>You Can...</Text>
            {Round1Rules.map((rule) => {
              return (
                <Text style={informationPageStyles.ruleText}>{rule.key}</Text>
              );
            })}
          </View>
          <Pressable style={informationPageStyles.readyButton}>
            <Text style={informationPageStyles.readyButtonText}>Ready</Text>
          </Pressable>
        </View>
        <View style={informationPageStyles.scoreContainer}>
          <Text style={informationPageStyles.scoreText}>score</Text>
        </View>
      </View>
    </View>
  );
}

export default InformationPage;
