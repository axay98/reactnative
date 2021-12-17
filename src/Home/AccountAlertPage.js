import React from "react";
import { ScrollView, Text, View } from "react-native";
import AccountAlert from "../component/AccountAlert";
import AccountIcon from "../component/AccountIcon";

const AccountAlertPage = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          padding: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Account Alerts
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15,
            }}
          >
            <AccountIcon
              colorr="rgb(246,246,248)"
              textColor="black"
              value="3"
            />
            <AccountIcon
              colorr="rgb(246,246,248)"
              textColor="black"
              value="2"
            />
            <AccountIcon colorr="rgb(255,193,23)" textColor="white" value="6" />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",

          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          padding: 10,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View style={{ flex: 1, marginTop: 5 }}>
          <ScrollView nestedScrollEnabled={true} style={{ height: 200 }}>
            <AccountAlert />

            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
            <AccountAlert />
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
      </View>
    </View>
  );
};
export default AccountAlertPage;
