import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { ScrollView } from "react-native-web";
import { spacing } from "../themes/spacing";
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, UranusSvg } from "../svg";

export default function Details({ route }) {
  const planet = route.params.planet;
    console.log(planet)

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "jupitar":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "earth":
        return <EarthSvg />;
      case "uranus":
        return <UranusSvg/>;
    }
  };

  return (
    <View style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
              <View style={styles.imageView}>{renderImage(planet.name)}</View>
              <View style={styles.detailsView}>
                  <Text preset="h1" style={styles.name}>{planet.name}</Text>
                  <Text preset="small">{planet.description}</Text>
                  <Pressable style={styles.source}>
                      <Text preset="h4">Source:</Text>
                      <Text preset="h4" style={styles.weikipedia}>Wikipedia</Text>
                  </Pressable>
              </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
    imageView: {
      marginTop:spacing[5],
      padding: spacing[5],
    alignItems: "center",
      justifyContent: "center",
    },
    detailsView: {
        textAlign: 'center',
        marginHorizontal: spacing[6],
        marginTop:spacing[8]
    },
    name: {
        textTransform: 'uppercase',
        marginBottom: spacing[4],
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:spacing[6],
    },
    weikipedia: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft:spacing[4],
    }
});
