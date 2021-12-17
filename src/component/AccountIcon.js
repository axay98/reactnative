import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AccountIcon = ({ colorr, textColor, value, text }) => {
  return (
    <View
      style={{
        alignItems: "center",
        paddingBottom: 10,
      }}
    >
      <View style={[styles.container, { backgroundColor: colorr }]}>
        <Text style={{ fontSize: 26, color: textColor }}>{value}</Text>
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    backgroundColor: "#27E0CB",
    borderRadius: 50,

    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccountIcon;
