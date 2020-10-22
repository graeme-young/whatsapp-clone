import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

interface ChatRoomScreenProps {}

export const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({}) => {
  const route = useRoute();

  return <Text>Chat Room</Text>;
};
