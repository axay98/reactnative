import React from "react";
import { View, StyleSheet, Text } from "react-native";
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]}
      ></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({ percent, text }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View
      style={{
        alignItems: "center",
        paddingBottom: 10,
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View
          style={[styles.firstProgressLayer, firstProgressLayerStyle]}
        ></View>
        {renderThirdLayer(percent)}
        <Text style={[styles.display, { fontSize: 40 }]}>{percent}%</Text>
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 130,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  firstProgressLayer: {
    width: 130,
    height: 130,
    borderWidth: 20,
    borderRadius: 100,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#3498db",
    borderTopColor: "#3498db",
    transform: [{ rotateZ: "-135deg" }],
  },
  secondProgressLayer: {
    width: 130,
    height: 130,
    position: "absolute",
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#3498db",
    borderTopColor: "#3498db",
    transform: [{ rotateZ: "45deg" }],
  },
  offsetLayer: {
    width: 200,
    height: 200,
    position: "absolute",
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "grey",
    borderTopColor: "grey",
    transform: [{ rotateZ: "-135deg" }],
  },
});

export default CircularProgress;
