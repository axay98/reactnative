import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import RoundedIcon from "./RoundedIcon";
const Header = ({ navigation }) => {
  return (
    <View
      style={{
        // position: "absolute",
        top: 0,
        height: 40,
        // right: 0,
        // left: 0,
        alignItems: "center",
        backgroundColor: "#33ADEF",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingTop: 30,
      }}
    >
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        // onPress={() => navigation.openDrawer()}
      >
        <RoundedIcon
          size={24}
          name="menu"
          color="black"
          backgroundColor="#33ADEF"
        />
      </TouchableOpacity>
      <Image
        style={{ width: 90, height: 40 }}
        source={{
          uri: "https://seeklogo.com/images/N/nerds-candy-logo-3843821086-seeklogo.com.png",
        }}
      />
      {/* <Text style={{ color: "black", fontSize: 18 }}>NERDS</Text> */}
      <TouchableOpacity
        style={{ marginRight: 5 }}
        onClick={() => alert("hello")}
      >
        <RoundedIcon
          size={24}
          name="shopping-bag"
          color="black"
          backgroundColor="#33ADEF"
          onClick={() => alert("hello")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
