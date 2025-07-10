import { View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { ResponsiveText } from '../../../components/ResponsiveText'
import { appStyles } from '../../../utilities'
import { SimpleButton } from '../../../components/SimpleButton'
import { hp, wp } from '../../../components/ResponsiveComponent'
import DropDown from './Components/dropDown'
import { colors, Routes } from '../../../constants'
import TextInputField from '../../../components/TextInputField'

const SettingProfile = (props) => {
    // const { openGallery } = useSettingProfile()
    // const navigation = useNavigation()
    const [currency, setCurrency] = useState('usd')
    const currencyItems = [
        { label: 'USD', value: 'usd' },
        { label: 'EUR', value: 'eur' },
        { label: 'PKR', value: 'pkr' },
        { label: 'GBP', value: 'gbp' },
    ]

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='PROFILE' onBackPress={() => props.navigation.goBack()} />
                <Spacer />

                <View style={styles.profileCard}>
                    <View style={appStyles.rowBasic}>
                        <Image source={images.placeholderProfileImg} style={styles.profilePlaceholderImg} />

                        <View style={styles.profileTextContainer}>
                            <ResponsiveText style={styles.headingProfile}>PROFILE IMAGE</ResponsiveText>
                            <ResponsiveText style={styles.imageProfileDescription} numberOfLines={3}>
                                We recommend to upload images in{'\n'}500x500 resolution. Max 5 MB in JPEG{'\n'}or PNG format
                            </ResponsiveText>
                            <Spacer />
                            <SimpleButton text="Upload Image" styleView={styles.btnUploadImg} onPress={() => { }} />
                        </View>
                    </View>
                </View>

                <Spacer height={hp(4)} />

                <ResponsiveText style={styles.inputLabel}>Email</ResponsiveText>
                <TextInputField placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />

                <Spacer height={hp(2)} />

                <ResponsiveText style={styles.inputLabel}>Phone number</ResponsiveText>
                <TextInputField placeholder={"Enter your phone number"} placeholderTextColor={colors.placeHolderTextColor} />

                <Spacer height={hp(2)} />

                <ResponsiveText style={styles.inputLabel}>Primary Market Currency</ResponsiveText>
                {/* <View style={styles.input}> */}
                <DropDown
                    items={currencyItems}
                    value={currency}
                    setValue={setCurrency}
                    placeholder="Select currency"
                />
                {/* </View> */}

                <Spacer height={hp(24)} />
                <View style={styles.btnSaveChangesView}>
                    <SimpleButton text="Save Changes" textColor={colors.disableTextColor} disabled={true} styleView={styles.btnSaveChanges} />
                </View>

            </View>
        </AuthMainContainer>
    )
}

export default SettingProfile
