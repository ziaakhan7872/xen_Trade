import { ScrollView, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { SimpleButton } from '../../../components/SimpleButton'
import { styles } from './styles'
import { colors } from '../../../constants'
import { appStyles } from '../../../utilities'
import { InputForm } from './Components'
import { useAddressDetailsExpanded } from './Hooks'

const AddressDetailsExpanded = (props) => {
    const { isEditable, setIsEditable } = useAddressDetailsExpanded()
    return (
        <AuthMainContainer>
            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        // justifyContent: 'space-between',
                    }}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.containerMain}>
                        <MainHeader leftImage={images.backArrow} title='ETH-METAMASK' onBackPress={() => props?.navigation.goBack()} />
                        <Spacer height={hp(3)} />

                        <InputForm isEditable={isEditable} />
                    </View>
                </ScrollView>


                <View style={[appStyles.row, styles.buttonRow]}>
                    <SimpleButton text="Delete" textColor={colors.white} styleView={styles.deleteBtn} />
                    <SimpleButton text={isEditable ? "Save" : "Edit"} textColor={colors.white} styleView={styles.editBtn} onPress={() => setIsEditable(!isEditable)} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default AddressDetailsExpanded