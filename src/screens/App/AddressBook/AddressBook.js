import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { SimpleButton } from '../../../components/SimpleButton'
import RowTabs from './Components/RowTabs'
import AddressCard from './Components/AddressCard'

const AddressBook = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ADDRESS BOOK' onBackPress={() => props?.navigation.goBack()} />
                <Spacer height={hp(3)} />
                <RowTabs />
                <Spacer />
                {/* Have to pass navigation props for the child component to use */}
                <AddressCard navigation={props.navigation} />
                <Spacer height={hp(3)} />

                <View style={styles.buttonRow}>
                    <SimpleButton text="Add new Address" textColor={colors.white} styleView={styles.addAddressBtn} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default AddressBook


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    addAddressBtn: {
        width: wp(88),
        backgroundColor: colors.transparentBtn,
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66
    },
    buttonRow: {
        alignItems: 'center'
    },
})

