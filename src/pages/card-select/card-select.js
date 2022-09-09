import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import styles from "./card-select.styles";

const TempCardpacks = [
  "Starting",
  "history",
  "Marvel",
  "Actors",
  "Theatre",
  "Sports",
];

function CardSelect({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Text style={styles.headerText}>Go Back</Text>
        </Pressable>
      </View>
      <View style={styles.cardPickerContainer}>
        <View style={styles.cardpackPickerTitleContainer}>
          <Text style={styles.cardpackPickerTitle}>SELECT YOUR CARDPACKS!</Text>
        </View>
        <View style={styles.cardpacks}>
          {TempCardpacks.map((cardpack) => (
            <View style={styles.cardpack}>
              <Image style={styles.cardpackImage} />
              <View style={styles.cardpackTitleContainer}>
                <Text style={styles.cardpackTitle}>{cardpack}</Text>
              </View>
            </View>
          ))}
        </View>
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
