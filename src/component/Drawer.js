import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import DrawerItem from "./DrawerItem";
import RoundedIcon from "./RoundedIcon";

const { width } = Dimensions.get("window");
export const drawer_width = width * 0.73;
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Items = [
  {
    label: "HOME",
    screen: "Homee",
  },
  {
    label: "CALENDAR VISITS",
    screen: "Visits",
  },
  {
    label: "TASKS",
    screen: "Tasks",
  },
  {
    label: "CASES",
    screen: "Cases",
  },
  {
    label: "SALES",
    screen: "Sales",
  },
  {
    label: "PERFORMANCE",
    screen: "Performance",
  },
  {
    label: "NOTES",
    screen: "Notes",
  },
  {
    label: "CONTACTS",
    screen: "Contacts",
  },
  {
    label: "PRODUCTS",
    screen: "Products",
  },
  {
    label: "  ",
    screen: "",
  },
  {
    label: "SETTINGS",
    screen: "Settings",
  },

  {
    label: "LOG OUT",
    screen: "Logout",
  },
];

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgb(136,78,255)",
            paddingLeft: 10,
            justifyContent: "center",
            padding: 0,
            paddingBottom: 250,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.closeDrawer()}>
              <RoundedIcon
                size={24}
                name="x"
                color="white"
                backgroundColor="rgb(136,78,255)"
              />
            </TouchableOpacity>
          </View>
          {Items.map((item) => (
            <DrawerItem key={item.screen} navigation={navigation} {...item} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
