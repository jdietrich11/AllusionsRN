import { View, Text, StyleSheet, Pressable } from "react-native";

function HomePage () {
  const handlePress = () => {
    console.log('Click');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>New Game!</Text>
        </View>
      </Pressable>
    </View>
  )
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%',
    width:  '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderWidth: 12,
    borderColor: 'grey',
    padding: 22,
  },
  button: {
    color: 'grey',
    fontSize: 48,
  }
});