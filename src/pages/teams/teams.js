import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import styles from "./teams.styles";

function TeamsPage({ navigation }) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

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
          <TextInput placeholder="+ADD" style={styles.teamMemberTextInput} />
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
          <TextInput placeholder="+ADD" style={styles.teamMemberTextInput} />
        </View>
      </View>
      <Pressable
        style={styles.startContainer}
        onPress={() => navigation.navigate("cardSelect")}
      >
        <Text>&rarr;</Text>
      </Pressable>
    </View>
  );
}

export default TeamsPage;
