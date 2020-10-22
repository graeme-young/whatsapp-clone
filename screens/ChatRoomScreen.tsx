import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ChatMessage } from "../components/ChatMessage/index";
import chatRoomData from "../data/Chats";

interface ChatRoomScreenProps {}

export const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const route = useRoute();

  return (
    <FlatList
      data={chatRoomData.messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
      inverted
    />
  );
};
