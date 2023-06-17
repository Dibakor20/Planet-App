import React from "react";
import { View ,StyleSheet, Pressable} from "react-native";
import Text from "./Text";
import { spacing } from "../themes/spacing";
import { colors } from "../themes/colors";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


export default function PlanetHeader({ backBtn }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable style={{marginRight:spacing[4]}} onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="leftcircle" size={24} color="white" />
                </Pressable>
            )}
            <Text preset="h2">THE PLANET</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[6],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems:'center',
    }
})