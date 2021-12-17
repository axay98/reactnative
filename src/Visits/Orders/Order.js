import React from "react";
import { Text, ScrollView, View } from "react-native";
import TopTabs from "../TopTabs";
import OrderList from "./OrderList";
const Order = ({ navigation }) => {
  return (
    <View>
      <TopTabs navigation={navigation} current="orders" />
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text>MY ORDERS</Text>
        </View>

        <ScrollView>
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Order;
