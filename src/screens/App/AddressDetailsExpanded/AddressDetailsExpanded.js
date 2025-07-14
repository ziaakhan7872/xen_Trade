import { Image, TouchableOpacity, View } from 'react-native'
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
import { ResponsiveText } from '../../../components/ResponsiveText'
import TextInputField from '../../../components/TextInputField'
import CopyInputField from './Components'

const AddressDetailsExpanded = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ETH-METAMASK' onBackPress={() => props?.navigation.goBack()} />
                <Spacer height={hp(3)} />

                <ResponsiveText style={styles.inputLabel}>Name</ResponsiveText>
                <TextInputField placeholder={'ETH-Metamask'} placeholderTextColor={colors.white} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Address</ResponsiveText>
                <CopyInputField />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Network</ResponsiveText>
                <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Tag Type</ResponsiveText>
                <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} />
                <Spacer />
                <ResponsiveText style={styles.inputLabel}>Tag</ResponsiveText>
                <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} />
                <Spacer />
            </View>

            <View style={[appStyles.row, styles.buttonRow]}>
                <SimpleButton text="Delete" textColor={colors.white} styleView={styles.deleteBtn} />
                <SimpleButton text="Edit" textColor={colors.white} styleView={styles.editBtn} />
            </View>
        </AuthMainContainer>
    )
}

export default AddressDetailsExpanded