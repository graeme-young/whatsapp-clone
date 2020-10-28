import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, ImageBackground, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ChatMessage } from "../components/ChatMessage/index";
import { InputBox } from "../components/InputBox/index";
import chatRoomData from "../data/Chats";

interface ChatRoomScreenProps {}

export const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const route = useRoute();

  return (
    <View>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </View>
  );
};
