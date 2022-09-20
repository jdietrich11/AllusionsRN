import { StyleSheet } from "react-native";

const informationPageStyles = StyleSheet.create({
  informationPageContainer: {
    flex: 1,
  },
  timerContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timerText: {
    fontSize: 42,
    marginBottom: 8,
  },
  playAreaInfo: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipContainer: {
    height: "90%",
    width: 32,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopRightRadius: 100000,
    borderBottomRightRadius: 100000,
  },
  skipText: {
    fontSize: 42,
    textTransform: "uppercase",
    textAlign: "center",
  },
  playerRulesContainer: {
    width: "70%",
    height: "90%",
    borderWidth: 2,
    borderRadius: 12,
  },
  playerNameContainer: {
    marginTop: 12,
  },
  playerName: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default informationPageStyles;
