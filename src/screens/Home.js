import React from 'react';
import { View,StyleSheet} from 'react-native';
import Text from '../components/Text';
import PlanetHeader from '../components/PlanetHeader';
import { colors } from '../themes/colors';

export default function Home() {
    return (
        <View style={styles.container}>
            <PlanetHeader/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.black
    }
})