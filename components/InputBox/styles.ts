import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default styles;
