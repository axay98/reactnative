import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TopVisit = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 10,

        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 50, height: 40 }}
            source={{
              uri: "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Giant_Eagle_curbside_pickup_center_store_1.jpg?itok=V0KMs4ff",
            }}
          />
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <Smallicon status={status} /> */}
              <Text
                style={{
                  padding: 3,
                  paddingLeft: 5,
                  color: "grey",
                  fontSize: 10,
                }}
              >
                PLANNED . HIGH PRIORITY
              </Text>
            </View>
            <Text style={{ padding: 3, color: "grey", fontSize: 12 }}>
              GIANT EAGLE | Parkway Center
            </Text>

            <Text style={{ padding: 3, color: "grey", fontSize: 11 }}>
              123 Two Pine Drive
            </Text>

            <Text style={{ padding: 3, color: "grey", fontSize: 11 }}>
              Brooklyn, NY 11218 M-F 9AM - 8PM
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(136,78,255)",
              borderRadius: 100,
              height: 40,
              width: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 10,
              }}
            >
              START VISIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ justifyContent: "center", marginLeft: 10, marginBottom: 15 }}
      >
        <Text style={{ color: "rgb(46,56,77)", marginBottom: 5, fontSize: 12 }}>
          2 TASKS TO COMPLETE
        </Text>
        <View
          style={{
            height: 10,

            backgroundColor: "rgb(225 ,229,245)",
            borderRadius: 50,

            marginRight: 20,
          }}
        ></View>
      </View>
    </View>
  );
};
export default TopVisit;
