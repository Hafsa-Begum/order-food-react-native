import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { colors } from '../theme/colors'

export default function AndroidSafeView({ children }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.pureWhite,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})
