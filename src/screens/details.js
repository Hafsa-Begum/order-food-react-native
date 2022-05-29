import React from 'react'
import { View, StyleSheet } from 'react-native'
import AndroidSafeView from '../components/android-safe-view'
import Button from '../components/button'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { LettuceSVG } from '../svg'

export default function Details() {
    return (
        <AndroidSafeView>
            <View>
                <View style={styles.upperPart}>
                    <LettuceSVG />
                </View>
                <View style={styles.lowerPart}>
                    <View style={styles.upperPartSVG}>

                    </View>
                    <Text preset='h2' style={{ color: colors.black, lineHeight: 45 }}>Boston Lettuce</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text preset='h2' style={{ color: colors.black, lineHeight: 45 }}>1.12 </Text>
                        <Text style={{ color: colors.gray }}>{'\u00A3'}/piece</Text>
                    </View>
                    <Text style={{ color: colors.green }}>~ 150 gr / piece</Text>
                    <Text preset='h3' style={{ color: colors.black, marginTop: spacing[3] }}>Spain</Text>
                    <Text style={{ color: colors.gray, marginVertical: spacing[5] }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                    </Text>
                    <View style={styles.addToCart}>
                        <View style={styles.heart}>
                            <AntDesign name="hearto" size={18} color="gray" />
                        </View>
                        <Button bgColor={colors.green} textColor={colors.white} width={270} preset='h4'><AntDesign name="shoppingcart" size={18} color="white" />  Add to cart</Button>
                    </View>

                </View>

            </View>
        </AndroidSafeView>
    )
}

const styles = StyleSheet.create({
    upperPart: {
        height: 250
    },
    lowerPart: {
        backgroundColor: colors.white,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        textAlign: 'left',
        paddingHorizontal: spacing[7],
        paddingVertical: spacing[9]
    },
    addToCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[1]
    },
    heart: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 12.5,
        borderRadius: 8,
        borderColor: colors.gray,

    }
})