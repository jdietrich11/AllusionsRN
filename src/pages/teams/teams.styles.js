import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  teamsPageContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 22,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerText: {
    color: "white",
    fontSize: 48,
  },
  howToContainer: {
    flexDirection: "row",
  },
  howToText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    marginRight: 8,
  },
  howToButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    width: 48,
    height: 48,
    borderRadius: "199999%",
  },
  howToButtonText: {
    color: "white",
    fontSize: 32,
  },
  team1Container: {
    flex: 4,
    padding: 22,
    backgroundColor: "red",
  },
  team2Container: {
    flex: 4,
    padding: 22,
    backgroundColor: "blue",
  },
  startContainer: {
    flex: 1,
    padding: 22,
  },
});

export default styles;
