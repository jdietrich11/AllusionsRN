import { useState } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";

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
  const [cardCount, setCardCount] = useState(37);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.emptyContainer}></View>
        <Pressable
          style={styles.arrowContainer}
          onPress={() => navigation.navigate("teamsPage")}
        >
          <Text style={styles.headerText}>&larr;</Text>
        </Pressable>
      </View>
      <View style={styles.cardPickerContainer}>
        <View style={styles.cardpackPickerTitleContainer}>
          <Text style={styles.cardpackPickerTitle}>SELECT YOUR CARDPACKS!</Text>
        </View>
        <View style={styles.cardpacks}>
          {TempCardpacks.map((cardpack) => (
            <View key={cardpack} style={styles.cardpack}>
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
            <Pressable
              style={styles.cardAdjustmentCounter}
              onPress={() => setCardCount(cardCount - 1)}
            >
              <Text style={styles.cardCounterText}>-</Text>
            </Pressable>
            <View style={styles.cardCountBox}>
              <Text style={styles.cardCount}>{cardCount + " cards"}</Text>
            </View>
            <Pressable
              style={styles.cardAdjustmentCounter}
              onPress={() => setCardCount(cardCount + 1)}
            >
              <Text style={styles.cardCounterText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.cardpackCounter}>
            <Text style={styles.cardCounterTextFrom}>{"from 3 cardpacks"}</Text>
          </View>
        </View>
        <View style={styles.playtimeContainer}>
          <Text>{"~ 40 Minutes"}</Text>
        </View>
      </View>
      <View style={styles.secondsPerTurnContainer}>
        <View style={styles.secondsCounter}>
          <TextInput style={styles.textInput} value="160" />
          <Text style={styles.secondTurnsText}>second turns</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("informationPage")}
          style={styles.teamsPageButton}
        >
          <Text style={styles.teamsPageButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CardSelect;
