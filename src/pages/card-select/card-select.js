import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";

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
        <View style={styles.cardCounterContainer}>
          <View style={styles.cardCounter}>
            <Pressable style={styles.cardAdjustmentCounter}>
              <Text style={styles.cardCounterText}>-</Text>
            </Pressable>
            <View style={styles.cardCountBox}>
              <Text style={styles.cardCount}>{"37 cards"}</Text>
            </View>
            <Pressable style={styles.cardAdjustmentCounter}>
              <Text style={styles.cardCounterText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.cardpackCounter}>
            <Text style={styles.cardCounterText}>{"from 3 cardpacks"}</Text>
          </View>
        </View>
        <View style={styles.playtimeContainer}>
          <Text>{"~ 40 Minutes"}</Text>
        </View>
      </View>
      <View style={styles.secondsPerTurnContainer}>
        <Text>Second Turns???</Text>
      </View>
    </View>
  );
}

export default CardSelect;
