import React from "react";
import { Text, View } from "react-native";
import CircularIcon from "../component/CircularIcon";
import CircularProgress from "../component/CircularProgress";

const Performance = () => {
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
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Performance</Text>
      <Text style={{ color: "grey" }}>
        325 Stores | 100 Markets, 225 Convinience outlets
      </Text>
      <View
        style={{
          paddingTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <CircularIcon color="#27E0CB" textColor="black" value="8.5" />
        <CircularProgress
          percent={65}
          text="REVENUE TO TARGET"
          color="yellow"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <CircularProgress
          percent={95}
          text="SCHEDULE TO TARGET"
          color="green"
        />
        <CircularProgress percent={55} text="TIME TO CLOSE" color="red" />
      </View>
    </View>
  );
};

export default Performance;
