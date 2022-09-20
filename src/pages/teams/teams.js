import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import styles from "./teams.styles";

function TeamsPage({ navigation }) {
  const [team1, setTeam1] = useState([]);
  const [team1Input, setTeam1Input] = useState("");
  const [team2, setTeam2] = useState([]);
  const [team2Input, setTeam2Input] = useState("");

  function handleSubmitTeam1() {
    setTeam1([...team1, team1Input]);
    setTeam1Input("");
  }
  function handleSubmitTeam2() {
    setTeam2([...team2, team2Input]);
    setTeam2Input("");
  }

  return (
    <View style={styles.teamsPageContainer}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Text style={styles.headerText}>&larr;</Text>
        </Pressable>
        <View style={styles.howToContainer}>
          <Text style={styles.howToText}>How to play</Text>
          <Pressable style={styles.howToButton}>
            <Text style={styles.howToButtonText}>?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.team1Container}>
        <View style={styles.teamHeader}>
          <Text style={styles.teamHeaderText}>Team 1</Text>
        </View>
        {team1.map((teamMember) => (
          <View key={teamMember} style={styles.teamMemberContainer}>
            <Text style={styles.teamMemberText}>{teamMember}</Text>
          </View>
        ))}
        <View style={styles.teamMemberInputContainer}>
          <TextInput
            placeholder="+ADD"
            value={team1Input}
            style={styles.teamMemberTextInput}
            onChangeText={(text) => setTeam1Input(text)}
            onSubmitEditing={() => handleSubmitTeam1()}
          />
        </View>
      </View>
      <View style={styles.team2Container}>
        <View style={styles.teamHeader}>
          <Text style={styles.teamHeaderText}>Team 2</Text>
        </View>
        {team2.map((teamMember) => (
          <View key={teamMember} style={styles.teamMemberContainer}>
            <Text style={styles.teamMemberText}>{teamMember}</Text>
          </View>
        ))}
        <View style={styles.teamMemberInputContainer}>
          <TextInput
            placeholder="+ADD"
            value={team2Input}
            style={styles.teamMemberTextInput}
            onChangeText={(text) => setTeam2Input(text)}
            onSubmitEditing={() => handleSubmitTeam2()}
          />
        </View>
      </View>
      <View style={styles.nextContainer}>
        <Pressable style={styles.nextButtonContainer}>
          <Text>Randomize</Text>
        </Pressable>
        <Pressable
          style={styles.nextButtonContainer}
          onPress={() => navigation.navigate("cardSelect")}
        >
          <Text style={styles.nextButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TeamsPage;
