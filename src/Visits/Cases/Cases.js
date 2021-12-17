import React from "react";
import { Text, ScrollView, View } from "react-native";
import TopTabs from "../TopTabs";
import CaseList from "./CaseList";
const Cases = ({ navigation }) => {
  return (
    <View>
      <TopTabs navigation={navigation} current="cases" />
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
          <CaseList />
          <CaseList />
          <CaseList />
          <CaseList />
          <CaseList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Cases;
