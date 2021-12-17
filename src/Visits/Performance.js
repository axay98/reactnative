import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CircularIcon from "../component/CircularIcon";
import CircularProgress from "../component/CircularProgress";
import RoundedIcon from "../component/RoundedIcon";

const Performance = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12 }}>GIANT EAGLE PARKWAY CENTER</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "white",

            borderRadius: 100,
            height: 40,
            width: 70,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "black",
              }}
            >
              MONTHLY
            </Text>
            <RoundedIcon
              size={24}
              name="chevron-down"
              color="black"
              backgroundColor="white"
            />
          </View>
        </TouchableOpacity>
      </View>
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
