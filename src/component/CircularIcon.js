import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CircularIcon = ({ color, textColor, value }) => {
  return (
    <View style={{ alignItems: "center", paddingBottom: 10 }}>
      <View
        style={[
          styles.container,
          { backgroundColor: color, textColor: textColor },
        ]}
      >
        <Text style={{ fontSize: 50 }}>{value}</Text>
      </View>
      <Text>AVG PERFECT SCORE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,

    backgroundColor: "#27E0CB",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircularIcon;
