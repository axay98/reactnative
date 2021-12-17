import React from "react";
import { ScrollView, Text, View } from "react-native";
import TopTabs from "../TopTabs";
import TaskList from "./Tasklist";

const Tasks = ({ navigation }) => {
  return (
    <View>
      <TopTabs navigation={navigation} current="tasks" />
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold" }}>4 TASKS</Text>
        </View>
        <ScrollView>
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
        </ScrollView>
      </View>
    </View>
  );
};
export default Tasks;
