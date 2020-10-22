import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import styles from "./styles";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCf8C5" : "white",
            marginRight: isMyMessage() ? 0 : 50,
            marginLeft: isMyMessage() ? 50 : 0,
          },
        ]}
      >
        {isMyMessage() ? null : (
          <Text style={styles.name}>{message.user.name}</Text>
        )}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};
