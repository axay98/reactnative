import React from "react";
import { Text, ScrollView, View } from "react-native";
import RoundedIcon from "../component/RoundedIcon";

import NoteList from "./NoteList";
import TopTabs from "./TopTabs";

const Notes = ({ navigation }) => {
  return (
    <View>
      <TopTabs navigation={navigation} current="notes" />

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
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Text style={{ paddingRight: 250, fontWeight: "bold", fontSize: 17 }}>
            Notes
          </Text>
          <RoundedIcon
            size={24}
            name="edit-3"
            color="grey"
            backgroundColor="white"
          />
        </View>
        <ScrollView nestedScrollEnabled={true}>
          <NoteList />
          <NoteList />
          <NoteList />
          <NoteList />
          <NoteList />
          <NoteList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Notes;
