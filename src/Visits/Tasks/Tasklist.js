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

const TaskList = () => {
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
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          > */}
          <View style={{ paddingRight: 5 }}>
            <Smallicon />
          </View>

          <Text style={{ paddingRight: 130, fontWeight: "bold" }}>
            Inventory Check
          </Text>

          {/* </View> */}
          <Text style={{ padding: 2, color: "grey" }}>Complete</Text>
        </View>

        <Text style={{ padding: 2, color: "grey" }}>Due: 21 Dec 2021</Text>
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
export default TaskList;
