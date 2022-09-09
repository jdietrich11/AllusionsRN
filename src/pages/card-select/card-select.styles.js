import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    padding: 22,
  },
  cardPickerContainer: {
    flex: 5,
    backgroundColor: "#f8f8ff",
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
    height: "90%",
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
    flex: 1.5,
    backgroundColor: "blue",
  },
  secondsPerTurnContainer: {
    flex: 1.5,
  },
});

export default styles;
