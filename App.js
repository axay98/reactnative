import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Visits from "./src/Visits/Visits";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/Home/Home";

const AppStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
import DrawerContent, { drawer_width } from "./src/component/Drawer";
import Notes from "./src/Visits/Notes";
import Order from "./src/Visits/Orders/Order";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{ width: drawer_width }}
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Drawer.Screen name="Homee" component={Home} />
    <Drawer.Screen name="Visits" component={Visits} />
    {/* <Drawer.Screen name="FavouriteOutfits" component={FavouriteOutfits} /> */}
  </Drawer.Navigator>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    "sf-pro-bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "sf-pro-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "sf-pro-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer independent={true}>
      <AppStack.Navigator
        initialRouteName="HomeApp"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <AppStack.Screen name="HomeApp" component={HomeNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
