import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, UranusSvg } from "../svg/index";
import { Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="h4">{title}</Text>
      <Text preset="h3">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name ,wikiLink} = planet;

  const onPressLink = () => {
    Linking.openURL(wikiLink)
  }

  const renderImage = () => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "earth":
        return <EarthSvg />;
      case "uranus":
        return <UranusSvg />;
      default:
        return null;
    }
  };

  return (
    <>
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
        <ScrollView style={{marginBottom:spacing[5]}}>
          <View style={styles.imageView}>{ renderImage()}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {planet?.name}
          </Text>
          <Text preset="small">{planet?.description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text preset="h4">Source:</Text>
            <Text preset="h4"  style={styles.weikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <PlanetSection title="rotationTime" value={planet.rotationTime} />
        <PlanetSection title="revolutionTime" value={planet.revolutionTime} />
        <PlanetSection title="radius" value={planet.radius} />
        <PlanetSection title="avgTemp" value={planet.avgTemp} />
      </ScrollView>
      </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[5],
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    textAlign: "center",
    marginHorizontal: spacing[6],
    marginTop: spacing[8],
  },
  name: {
    textTransform: "uppercase",
    marginBottom: spacing[4],
    textAlign: "center",
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing[6],
  },
  weikipedia: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: spacing[4],
  },
  planetSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
    marginHorizontal: spacing[5],
    marginTop: spacing[5],
  },
});
