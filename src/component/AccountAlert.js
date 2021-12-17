import React from "react";
import { Text, View } from "react-native";

const Smallicon = () => {
  return (
    <View
      style={{
        height: 5,
        width: 5,
        alignItems: "center",
        backgroundColor: "rgb(255,193,23)",
        borderRadius: 100,
      }}
    ></View>
  );
};

const AccountAlert = () => {
  return (
    <View>
      <View style={{ padding: 10, justifyContent: "center" }}>
        <Text style={{ padding: 3, color: "grey" }}>
          GIANT EAGLE | Parkway Center
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Smallicon />
          <Text style={{ fontWeight: "bold", padding: 3, paddingLeft: 5 }}>
            Refrigertor Outage
          </Text>
        </View>
        <Text style={{ padding: 3 }}>Assigned to John Smith on 1/12/2021</Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(135,152,173,0.2)",
          height: 0.7,
          marginLeft: 20,
          marginRight: 20,
        }}
      ></View>
    </View>
  );
};
export default AccountAlert;
