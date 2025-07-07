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
import { useNavigation } from '@react-navigation/native'

const settingProfile = () => {
    const navigation = useNavigation()
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
                <MainHeader leftImage={images.backArrow} title='PROFILE' onBackPress={() => { navigation.navigate(Routes.settingMain) }} />
                <Spacer />

                <View style={styles.profileCard}>
                    <View style={appStyles.rowBasic}>
                        <Image
                            source={images.placeholderProfileImg}
                            style={styles.profilePlaceholderImg}
                        />
                        <View style={styles.profileTextContainer}>
                            <ResponsiveText style={styles.headingProfile}>
                                PROFILE IMAGE
                            </ResponsiveText>
                            <ResponsiveText style={styles.imageProfileDescription} numberOfLines={3}>
                                We recommend to upload images in{'\n'}500x500 resolution. Max 5 MB in JPEG{'\n'}or PNG format
                            </ResponsiveText>
                            <Spacer />
                            <SimpleButton text="Upload Image" styleView={styles.btnUploadImg} />
                        </View>
                    </View>
                </View>

                <Spacer height={hp(4)} />

                <ResponsiveText style={styles.inputLabel}>Email</ResponsiveText>
                <TextInput
                    placeholder="Enter your email address"
                    placeholderTextColor={colors.placeHolderTextColor}
                    style={styles.input}
                />

                <Spacer height={hp(2)} />

                <ResponsiveText style={styles.inputLabel}>Phone number</ResponsiveText>
                <TextInput
                    placeholder="Enter your Phone number"
                    placeholderTextColor={colors.placeHolderTextColor}
                    style={styles.input}
                />

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

export default settingProfile
