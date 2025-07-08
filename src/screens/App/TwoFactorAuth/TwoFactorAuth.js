import { View, Image, TextInput } from 'react-native';
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { MainHeader } from '../../../components/MainHeader';
import { styles } from './styles';
import images from '../../../images';
import { useNavigation } from '@react-navigation/native';
import { colors, Routes } from '../../../constants';
import { ResponsiveText } from '../../../components/ResponsiveText';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { SimpleButton } from '../../../components/SimpleButton';
import { appStyles } from '../../../utilities';
import TextInputField from '../../../components/TextInputField';

const TwoFactorAuth = () => {
    const navigation = useNavigation();

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='2-FACTOR AUTHENTICATION' onBackPress={() => navigation.goBack()} />

                <Spacer height={hp(3)} />

                <ResponsiveText style={styles.heading}>2-Factor authentication</ResponsiveText>
                <ResponsiveText style={styles.description}>Enable 2-Factor authentication via Google Authenticator, or any 2FA App</ResponsiveText>

                <Spacer height={hp(4)} />

                <View style={styles.qrWrapper}>
                    <Image source={images.testQrImg} style={styles.qrImage} />
                </View>

                <Spacer height={hp(2)} />

                <SimpleButton text="Secret Code" styleView={styles.secretBtn} />

                <Spacer height={hp(3)} />

                <ResponsiveText style={styles.inputLabel}>Enter code from 2-FA app</ResponsiveText>
                <TextInputField placeholder={'Enter Code'} />

                <Spacer height={hp(20)} />

                <View style={[appStyles.row, styles.buttonRow]}>
                    <SimpleButton text="Cancel" styleView={styles.cancelBtn} />
                    <SimpleButton text="Save" textColor={colors.disableTextColor} styleView={styles.saveBtn} />
                </View>
            </View>
        </AuthMainContainer>
    );
};

export default TwoFactorAuth;
