import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { PLANET_LIST } from "../data/PlanetList";
import { spacing } from "../themes/spacing";

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
              <View
                style={[styles.circle, { backgroundColor: item.color }]}
              ></View>
              <Text preset="h4"> {item.name}</Text>
            </View>
          );
        }}
                    itemSeparatorComponent={() => <View style={ styles.separators} />}
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
      padding: spacing[4],
      borderBottomColor: colors.grey,
      borderWidth:0.2,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  separators: {
     
  },
});
