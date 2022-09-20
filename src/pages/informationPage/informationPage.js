import { Text, View, FlatList } from "react-native";

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
            <Text style={informationPageStyles.playerName}>Player</Text>
          </View>
          <View>
            <Text>You Can...</Text>
            <FlatList
              data={Round1Rules}
              renderItem={(rules) => {
                return <Text>{rules.key}</Text>;
              }}
            />
          </View>
          <View>
            <Text>Ready</Text>
          </View>
        </View>
        <View>
          <Text>score</Text>
        </View>
      </View>
    </View>
  );
}

export default InformationPage;
