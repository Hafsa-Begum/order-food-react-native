import React from 'react'
import { View, StyleSheet } from 'react-native'
import AndroidSafeView from '../components/android-safe-view'
import Button from '../components/button'
import Text from '../components/text/text'
import { LogoSVG, UpperPartSVG } from '../svg'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

export default function Home() {
    return (
        <AndroidSafeView>
            <View style={{ backgroundColor: colors.purple }}>
                <View style={styles.upperPart}>
                    <LogoSVG />
                </View>
                <View style={styles.lowerPart}>
                    <View style={styles.upperPartSVG}>
                        <UpperPartSVG />
                    </View>
                    <Text preset='h1' style={{ color: colors.black, lineHeight: 45 }}>Non-Contact</Text>
                    <Text preset='h1' style={{ color: colors.black, lineHeight: 45 }}> Deliveries</Text>
                    <Text style={{ color: colors.gray, marginVertical: spacing[5] }}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>
                    <Button bgColor={colors.green} textColor={colors.white} width={370} preset='h4' >Order Now</Button>
                    <Button bgColor={colors.white} textColor={colors.gray} width={370} preset='h3' >Dismiss</Button>
                </View>

            </View>
        </AndroidSafeView>
    )
}

const styles = StyleSheet.create({
    upperPart: {
        height: 250,
        paddingTop: spacing[10]
    },
    lowerPart: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        textAlign: 'center',
        paddingHorizontal: spacing[7],
        paddingVertical: spacing[5]
    },
    upperPartSVG: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.pureWhite
    }
})