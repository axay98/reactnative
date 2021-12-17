import React from "react";
import { ScrollView, Text, View } from "react-native";
import NewsComponent from "../component/NewsComponent";

const News = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>NEWS</Text>
      <ScrollView nestedScrollEnabled={true} style={{ height: 300 }}>
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(246,246,248)",
          height: 40,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>View All</Text>
      </View>
    </View>
  );
};
export default News;
