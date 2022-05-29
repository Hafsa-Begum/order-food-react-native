import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './text/text'

export default function Button({ children, bgColor, textColor, width, preset }) {
    const navigation = useNavigation();
    return (
        <View style={[styles.buttonView, { backgroundColor: bgColor, width: width }]}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Details')} >
                <Text style={{ color: textColor, textTransform: 'uppercase' }} preset={preset}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        padding: 5,
        marginHorizontal: spacing[4],
        borderRadius: 8,
        marginVertical: spacing[3]
    },
    button: {
        marginBottom: spacing[1]
    }
})