import { View, ScrollView } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { SimpleButton } from '../../../components/SimpleButton'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'
import { useSettingProfile } from './Hooks'
import { ImageUploadContainer, Inputs } from './Component'

const SettingProfile = (props) => {
    const {
        currency, setCurrency,
        isCurrencyOpen, setIsCurrencyOpen,
        currencyItems,
        email, setEmail,
        phonenum, setPhonenum,
    } = useSettingProfile()
    console.log("email --", email, "|||", "phonenum --", phonenum);

    return (
        <AuthMainContainer>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                keyboardShouldPersistTaps="handled">
                <View style={styles.containerMain}>
                    <MainHeader leftImage={images.backArrow} title='PROFILE' onBackPress={() => props.navigation.goBack()} />
                    <Spacer />

                    <ImageUploadContainer />
                    <Spacer height={hp(4)} />
                    <Inputs email={email} setEmail={setEmail} phonenum={phonenum} setPhonenum={setPhonenum} currencyItems={currencyItems} currency={currency} setCurrency={setCurrency} isCurrencyOpen={isCurrencyOpen} setIsCurrencyOpen={setIsCurrencyOpen} />
                </View>

                <View style={styles.btnSaveChangesView}>
                    <SimpleButton
                        text="Save Changes"
                        textColor={colors.disableTextColor}
                        disabled={email.trim() == '' || phonenum.trim() == '' ? true : false}
                        styleView={{
                            ...styles.btnSaveChanges,
                            backgroundColor: email.trim() != '' && phonenum.trim() != '' ? colors.mainColor : colors.transparentBtn
                        }}
                    />
                </View>
            </ScrollView>
        </AuthMainContainer>
    )
}

export default SettingProfile
