import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: "#e5e5e5",
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 5,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});

export default styles;
