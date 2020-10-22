import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

interface ChatListItemProps {
  chatRoom: ChatRoom;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatRoom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: chatRoom.users[1].imageUri }}
          style={styles.avatar}
        />
        <View style={styles.midContainer}>
          <Text>{chatRoom.users[1].name}</Text>
          <Text style={styles.lastMessage}>
            {chatRoom.lastMessage.content.substring(0, 30)}
          </Text>
        </View>
      </View>
      <Text style={styles.lastMessage}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

export default ChatListItem;
