import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "50%",
            height: 80,
          }}
        >
          <Text
            style={{
              color: "tomato",
              fontWeight: "bold",
              textAlign: "center",
              // paddingTop: "10%",
            }}
          >
            Hey there!
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
