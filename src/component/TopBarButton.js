import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TopBarButton = ({ navigation, screen, name, current }) => {
  let color = "rgba(237,237,247,0.75)";
  let radius = 0;
  let textcolor = "black";
  if (current === screen) {
    color = "rgb(61,61,95)";
    radius = 100;
    textcolor = "white";
  }
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: color,

          borderRadius: radius,
          height: 40,
          width: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate(screen);
        }}
      >
        <Text
          style={{
            fontSize: 9,
            color: textcolor,
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default TopBarButton;
