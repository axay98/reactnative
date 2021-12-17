import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../component/Header";

import Performance from "./Performance";
import AccountAlertPage from "./AccountAlertPage";
import News from "./News";
import Visits from "./Visits";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <Header />
      <ScrollView
        style={{
          backgroundColor: "grey",
          flex: 1,
        }}
      >
        <View style={{ backgroundColor: "#f5f5f5" }}>
          <Performance />

          <AccountAlertPage />
          <News />
          <Visits />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
