import React from "react";
import { View,StyleSheet } from "react-native";
import Text from "../components/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../themes/colors";
import { ScrollView } from "react-native-web";
import { spacing } from "../themes/spacing";


export default function Details({ route }) {
    const planet = route.params.planet 
    console.log(planet)
    return (
        <View style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>

                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.black
    },
    imageView: {
        padding: spacing[5],
        alignItems: 'center',
        justifyContent:'center'
        
    }
})

