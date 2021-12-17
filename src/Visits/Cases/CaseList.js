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

const CaseList = () => {
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
          <Text style={{ paddingRight: 190, fontWeight: "bold" }}>
            Case#: 0001
          </Text>

          <Smallicon />
          <Text style={{ padding: 3, paddingLeft: 5 }}>OPEN</Text>
        </View>
        <Text style={{ padding: 2, color: "black" }}>
          Open Date: 12 Dec 2021
        </Text>

        <Text style={{ padding: 2, color: "black" }}>
          Due Date: 18 Dec 2021
        </Text>

        <Text style={{ padding: 2, color: "black" }}>Assigned To: Tom</Text>
        <Text style={{ padding: 2, color: "black" }}>Case Type: Billing</Text>
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
export default CaseList;
