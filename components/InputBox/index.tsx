import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface InputBoxProps {}

export const InputBox: React.FC<InputBoxProps> = ({}) => {
  const [message, setMessage] = useState("");

  const sendPress = () => {
    console.log(`Sending: ${message}`);
    //send message to backend
    setMessage("");
  };

  const microphonePress = () => {
    console.log("Microphone");
  };

  const onPress = () => {
    if (message) {
      sendPress();
    } else {
      microphonePress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={6}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {message ? null : (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {message ? (
            <MaterialCommunityIcons name="send" size={28} color="white" />
          ) : (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
