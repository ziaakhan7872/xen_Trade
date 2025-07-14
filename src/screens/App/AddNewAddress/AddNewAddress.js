import { View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Spacer from '../../../components/Spacer'
import DropDowns from './Components/DropDowns'
import { appStyles } from '../../../utilities'
import { styles } from './styles'
import { SimpleButton } from '../../../components/SimpleButton'
import { hp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'
import images from '../../../images'
import TextInputField from '../../../components/TextInputField'

const AddNewAddress = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ADD NEW ADDRESS' onBackPress={() => props?.navigation.goBack()} />
                <Spacer height={hp(3)} />

                <DropDowns />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Wallet Name</ResponsiveText>
                <TextInputField placeholder={'Enter Wallet Here'} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Wallet Address</ResponsiveText>
                <TextInputField placeholder={'Enter Wallet Address'} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Tag Type</ResponsiveText>
                <TextInputField placeholder={'Destination Tag'} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Tag</ResponsiveText>
                <TextInputField placeholder={'Tag'} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer />
            </View>

            <View style={[appStyles.row, styles.buttonRow]}>
                <SimpleButton text="Cancel" textColor={colors.white} styleView={styles.cancelBtn} />
                <SimpleButton text="Save" textColor={colors.black} styleView={styles.saveBtn} />
            </View>
        </AuthMainContainer>
    )
}

export default AddNewAddress