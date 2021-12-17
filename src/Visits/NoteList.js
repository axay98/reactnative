import React from "react";
import { Text, View } from "react-native";

const Smallicon = () => {
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

const NoteList = () => {
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
          <Smallicon />
          <Text style={{ padding: 3, paddingLeft: 5 }}>NEW NOTE</Text>
        </View>
        <Text style={{ padding: 3, color: "grey" }}>16/12/2021 12:46 PM</Text>
        <Text style={{ padding: 3, color: "grey", fontSize: 15 }}>
          Lorem ipsum dolor sit amet. Quo error nesciunt a sunt velit hic
          laborum et quidem error et maiores nostrum eos internos debitis.
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
export default NoteList;
