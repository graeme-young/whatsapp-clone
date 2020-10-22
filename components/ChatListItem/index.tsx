import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

interface ChatListItemProps {
  chatRoom: ChatRoom;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatRoom }) => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoomScreen", {
      id: chatRoom.id,
      name: chatRoom.users[1].name,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
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
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
