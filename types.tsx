export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoomScreen: undefined;
  Contacts: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};

export type User = {
  id: string;
  name: string;
  imageUri?: string;
  status?: string;
};

export type Message = {
  id: string;
  content: string;
  user: User;
  createdAt: string;
};
