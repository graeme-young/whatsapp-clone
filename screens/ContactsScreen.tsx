import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import Users from "../data/Users";
import { NewMessageButton } from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Users}
        renderItem={({ item }) => {
          return <ContactListItem user={item} />;
        }}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
