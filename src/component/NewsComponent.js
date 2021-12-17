import React from "react";
import { Text, View } from "react-native";

const NewsComponent = () => {
  return (
    <View>
      <View style={{ padding: 10, justifyContent: "center" }}>
        <Text style={{ padding: 3, color: "black", fontSize: 13 }}>TITLE</Text>

        <Text
          style={{
            padding: 3,

            color: "grey",
          }}
        >
          15/12/2021 7:23 PM
        </Text>

        <Text style={{ padding: 3, color: "grey", fontSize: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          egestas dui.Fusce mattis tempus nisi,
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
export default NewsComponent;
