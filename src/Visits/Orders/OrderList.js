import React from "react";
import { Text, View } from "react-native";

const Smallicon = ({ status }) => {
  return (
    <View
      style={{
        height: 5,
        width: 5,
        alignItems: "center",
        backgroundColor: "rgb(39,224,203)",
        borderRadius: 100,
      }}
    ></View>
  );
};

const OrderList = () => {
  return (
    <View>
      <View style={{ padding: 10, justifyContent: "center" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ paddingRight: 130, fontWeight: "bold" }}>
            ORDER#: 00001{" "}
          </Text>

          <Smallicon />
          <Text style={{ padding: 3, paddingLeft: 5 }}>DELIVERED</Text>
        </View>
        <Text style={{ padding: 2, color: "grey" }}>16/12/2021 12:46 PM</Text>

        <Text style={{ padding: 2, color: "grey" }}>QUANTITY: 175</Text>

        <Text style={{ padding: 2, color: "grey" }}>Total: $325</Text>

        <Text style={{ padding: 2, color: "green" }}>
          Estimated Delivery on 22 Dec
        </Text>
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
export default OrderList;
