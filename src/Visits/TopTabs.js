import React from "react";
import { View, ScrollView } from "react-native";
import TopBarButton from "../component/TopBarButton";

const TopTabs = ({ navigation, current }) => {
  return (
    <View style={{ margin: 10, backgroundColor: "white", borderRadius: 100 }}>
      <ScrollView
        horizontal={true}
        style={{
          borderRadius: 15,
          flexDirection: "row",
          display: "flex",
          backgroundColor: "rgba(237,237,247,0.75)",
        }}
        showsHorizontalScrollIndicator={false}
      >
        <TopBarButton
          navigation={navigation}
          screen="orders"
          name="ORDERS"
          current={current}
        />
        <TopBarButton
          navigation={navigation}
          screen="notes"
          name="NOTES"
          current={current}
        />
        <TopBarButton
          name="TASKS"
          navigation={navigation}
          screen="tasks"
          current={current}
        />
        <TopBarButton
          name="CASES"
          navigation={navigation}
          screen="cases"
          current={current}
        />
        <TopBarButton
          name="CONTACTS"
          navigation={navigation}
          screen="contacts"
          current={current}
        />
        <TopBarButton
          name="PERFORMANCE"
          navigation={navigation}
          screen="performance"
          current={current}
        />
      </ScrollView>
    </View>
  );
};
export default TopTabs;
