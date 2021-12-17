import React from "react";
import { Text, View } from "react-native";
import RoundedIcon from "./RoundedIcon";

const Smallicon = ({ status }) => {
  let color = "grey";
  if (status === "COMPLETED") {
    color = "green";
  } else if (status === "IN-PROGRESS") {
    color = "rgb(253, 193, 49)";
  }
  return (
    <View
      style={{
        height: 5,
        width: 5,
        alignItems: "center",
        backgroundColor: color,
        borderRadius: 100,
      }}
    ></View>
  );
};

const VisitList = ({ status }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 5,

          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <RoundedIcon
            size={24}
            name="clock"
            color="grey"
            backgroundColor="white"
            onClick={() => alert("hello")}
          />
          <Text style={{ color: "grey", fontSize: 10 }}>5PM-7PM</Text>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Smallicon status={status} />
            <Text style={{ padding: 3, paddingLeft: 5, color: "grey" }}>
              {status} . HIGH PRIORITY
            </Text>
          </View>
          <Text style={{ padding: 3, color: "black" }}>
            GIANT EAGLE | Parkway Center
          </Text>

          <Text style={{ padding: 3, color: "grey" }}>123 Two Pine Drive</Text>

          <Text style={{ padding: 3, color: "grey" }}>Brooklyn, NY 11218</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RoundedIcon
            size={24}
            name="map-pin"
            color="black"
            backgroundColor="rgb(239,243,245)"
            onClick={() => alert("hello")}
          />
          <RoundedIcon
            size={24}
            name="trash"
            color="black"
            backgroundColor="rgb(239,243,245)"
            onClick={() => alert("hello")}
          />
        </View>
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
export default VisitList;
