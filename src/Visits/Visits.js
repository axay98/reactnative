import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../component/Header";
import TopTabs from "./TopTabs";
import TopVisit from "./TopVisit";
import Performance from "./Performance";
import Notes from "./Notes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Order from "./Orders/Order";
import Tasks from "./Tasks/Tasks";
import Cases from "./Cases/Cases";

const Stack = createStackNavigator();
const AuthenticationStack = createStackNavigator();

function AuthenticationNavigator() {
  return (
    <NavigationContainer independent={true}>
      <AuthenticationStack.Navigator
        initialRouteName="notes"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <AuthenticationStack.Screen name="notes" component={Notes} />
        <AuthenticationStack.Screen name="orders" component={Order} />
        <AuthenticationStack.Screen name="tasks" component={Tasks} />
        <AuthenticationStack.Screen name="cases" component={Cases} />
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
}
const Visits = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 40, flex: 1 }}>
      <Header />

      <ScrollView
        style={{
          backgroundColor: "rgb(248,249,254)",
          flex: 1,
          padding: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 5, borderRadius: 50 }}
          >
            <Text style={{ color: "rgb(136,78,255)", fontSize: 12 }}>
              GIANT EAGLE PARKWAY CENTER
            </Text>
          </View>
          <Text style={{ color: "rgb(105,112,127)", fontSize: 15 }}>
            Last sync 1 minute ago
          </Text>
        </View>
        <TopVisit />
        <Performance />

        {/* <TopTabs navigation={navigation} /> */}
      </ScrollView>
      <AuthenticationNavigator />
    </View>
  );
};
export default Visits;
