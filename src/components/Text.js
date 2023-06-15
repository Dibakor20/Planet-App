import React from "react";
import { StyleSheet } from "react-native";
import {Text as RNText} from 'react-native';
import { presets } from "./Text.preset";


export default function Text({ children, preset = "default", style }) {
    const textStyle = StyleSheet.compose(presets[preset],style)
    return (
            <RNText style={textStyle}>{ children}</RNText>
    )
}