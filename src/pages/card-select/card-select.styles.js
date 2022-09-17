import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
  containerHeader: {
    flex: 0.5,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-end",
    backgroundColor: "black",
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
  },
  arrowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    borderWidth: 4,
    borderRadius: 1000000,
    borderColor: "white",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  cardPickerContainer: {
    flex: 5,
  },
  cardpackPickerTitleContainer: {
    justifyContent: "center",
    height: "10%",
  },
  cardpackPickerTitle: {
    textAlign: "center",
    fontSize: 22,
  },
  cardpacks: {
    height: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardpack: {
    height: "40%",
    width: "25%",
    borderWidth: 2,
    borderRadius: 3,
    margin: 8,
    overflow: "hidden",
  },
  cardpackImage: {
    height: "80%",
  },
  cardpackTitleContainer: {
    flex: 1,
    borderTopWidth: 3,
    alignContent: "center",
    justifyContent: "center",
  },
  cardpackTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
  },
  gameLengthContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    alignItems: "center",
  },
  cardCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardCounter: {
    flexDirection: "row",
    marginRight: 8,
  },
  cardCounterText: {
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cardAdjustmentCounter: {
    borderWidth: 2,
    height: 30,
    width: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardCountBox: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
  },
  cardCount: {
    height: 25,
    width: 75,
    fontSize: 18,
    textAlign: "center",
  },
  secondsPerTurnContainer: {
    flex: 0.5,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondsCounter: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    height: 32,
    width: 72,
    fontSize: 24,
    textAlign: "center",
  },
  secondTurnsText: {
    fontSize: 28,
  },
  teamsPageButton: {
    borderWidth: 2,
    height: 32,
    width: 72,
    borderRadius: 3,
    backgroundColor: "green",
    justifyContent: "center",
  },
  teamsPageButtonText: {
    textAlign: "center",
  },
});

export default styles;
