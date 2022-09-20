import { View, Text, StyleSheet, Pressable } from "react-native";

function HomePage({ navigation }) {
  const handlePress = () => {
    console.log("Click");
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("teamsPage")}
      >
        <Text style={styles.button}>Play!</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.button}>Fast Rules!</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.button}>Browse Cardpacks</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.button}>Settings</Text>
      </Pressable>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  buttonContainer: {
    borderWidth: 12,
    marginBottom: 12,
    borderColor: "grey",
    padding: 22,
    width: "100%",
  },
  button: {
    color: "grey",
    fontSize: 32,
    textAlign: "center",
  },
});
