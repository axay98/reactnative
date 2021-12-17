import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import VisitList from "../component/VisitList";
const Visits = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Visits</Text>
        <Text style={{ color: "grey", fontSize: 14, paddingLeft: 30 }}>
          Wednesday, 15 Decemeber, 2021
        </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Image
          style={{ height: 100 }}
          source={{
            uri: "https://i.stack.imgur.com/HILmr.png",
          }}
        />
      </View>
      <ScrollView nestedScrollEnabled={true} style={{ height: 550 }}>
        <VisitList status="COMPLETED" />
        <VisitList status="IN-PROGRESS" />
        <VisitList status="PlANNED" />
        <VisitList status="PlANNED" />
        <VisitList status="COMPLETED" />
        <VisitList status="IN-PROGRESS" />
        <VisitList status="PlANNED" />
        <VisitList status="PlANNED" />
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(246,246,248)",
          height: 40,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>View Calendar</Text>
      </View>
    </View>
  );
};

export default Visits;
