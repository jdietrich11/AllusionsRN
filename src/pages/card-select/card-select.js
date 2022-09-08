import { View, Text, StyleSheet, Pressable } from "react-native";

function CardSelect({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Text style={styles.headerText}>Go Back</Text>
        </Pressable>
      </View>
      <View style={styles.cardPickerContainer}>
        <Text>Pick your Cards</Text>
      </View>
      <View style={styles.gameLengthContainer}>
        <Text>number of cards select</Text>
      </View>
      <View style={styles.secondsPerTurnContainer}>
        <Text>Second Turns???</Text>
      </View>
    </View>
  );
}

export default CardSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    padding: 32,
  },
  cardPickerContainer: {
    flex: 5,
    backgroundColor: "red",
  },
  gameLengthContainer: {
    flex: 1.5,
    backgroundColor: "blue",
  },
  secondsPerTurnContainer: {
    flex: 1.5,
  },
});
