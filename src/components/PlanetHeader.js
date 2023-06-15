import React from "react";
import { View ,StyleSheet} from "react-native";
import Text from "./Text";
import { spacing } from "../themes/spacing";
import { colors } from "../themes/colors";

export default function PlanetHeader() {
    return (
        <View style={styles.container}>
            <Text preset="h2">THE PLANET</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[6],
        borderBottomWidth: 0.2,
        borderBottomColor:colors.white,
    }
})