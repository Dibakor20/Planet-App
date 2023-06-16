import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { PLANET_LIST } from "../data/PlanetList";
import { spacing } from "../themes/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <PlanetHeader />
        <FlatList
          contentContainerStyle={styles.list}
          data={PLANET_LIST}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.item}>
                <View style={{flexDirection:'row'}}>
                  <View
                    style={[styles.circle, { backgroundColor: item.color }]}
                  ></View>
                  <Text preset="h4" style={styles.planetContent}> {item.name}</Text>
                </View>
                <AntDesign name="rightcircleo" size={24} color="white" />
              </View>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[5],
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    borderBottomColor: colors.grey,
    borderWidth: 0.2,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  planetContent: {
    marginTop: spacing[2],
    marginHorizontal:spacing[2],
  },
});
