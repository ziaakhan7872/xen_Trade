import { View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { hp } from '../../../components/ResponsiveComponent'
import { colors, Routes } from '../../../constants'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { SimpleButton } from '../../../components/SimpleButton'
import { AddressCard, RowTabs } from './Components'
import { styles } from './styles'
import { useAddressBook } from './Hooks'

const AddressBook = (props) => {
    const { selected, setSelected } = useAddressBook();

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ADDRESS BOOK' onBackPress={() => props?.navigation?.goBack()} />
                <Spacer height={hp(3)} />
                <RowTabs selected={selected} setSelected={setSelected} />
                <Spacer />
                <AddressCard props={props} />
                <Spacer height={hp(3)} />

                <View style={styles.buttonRow}>
                    <SimpleButton text="Add new Address" textColor={colors.white} styleView={styles.addAddressBtn} onPress={() => props?.navigation?.navigate?.(Routes.addNewAddress)} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default AddressBook




