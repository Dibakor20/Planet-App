import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { PLANET_LIST } from "../data/PlanetList";
import { spacing } from "../themes/spacing";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);

  const searchFilter = (text) => {
    const fillteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypeText = text.toLowerCase();

      return itemName.indexOf(userTypeText) > -1;
    });
    console.log(fillteredList)
    setList(fillteredList);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <PlanetHeader />
        <TextInput
          placeholder="Type Planet Name"
          placeholderTextColor={colors.white}
          autoCorrect={false}
          style={styles.searchInput}
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("Details", { planet: item });
                }}
                style={styles.item}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={[styles.circle, { backgroundColor: item.color }]}
                  ></View>
                  <Text preset="h4" style={styles.planetContent}>
                    {" "}
                    {item.name}
                  </Text>
                </View>
                <AntDesign name="rightcircleo" size={24} color="white" />
              </Pressable>
            );
          }}
        />
      </SafeAreaView>
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
    paddingVertical: spacing[4],
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
    marginHorizontal: spacing[2],
  },
  searchInput: {
    padding: spacing[5],
    color:colors.white,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
