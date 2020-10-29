import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

import { withAuthenticator } from "aws-amplify-react-native";
import { getUser } from "./graphql/queries";
import { createUser } from "./graphql/mutations";

const randomImages = [
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg",
];

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (userData.data.getUser) {
          return;
        } else {
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRandomImage(),
            status: "Online",
          };

          await API.graphql(graphqlOperation(createUser, { input: newUser }));
        }
      }
    };
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
