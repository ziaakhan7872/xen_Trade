import { View } from 'react-native';
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { MainHeader } from '../../../components/MainHeader';
import { styles } from './styles';
import images from '../../../images';
import { colors } from '../../../constants';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { SimpleButton } from '../../../components/SimpleButton';
import { appStyles } from '../../../utilities';
import { ScrollView } from 'react-native-gesture-handler';
import { TwoFactorContent } from './Components';
import { useTwoFactorAuth } from './Hooks';

const TwoFactorAuth = (props) => {
    const { code, setCode } = useTwoFactorAuth()

    return (
        <AuthMainContainer>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between',
                }}
                keyboardShouldPersistTaps="handled">

                <View style={styles.containerMain}>
                    <MainHeader leftImage={images.backArrow} title='2-FACTOR AUTHENTICATION' onBackPress={() => props?.navigation?.goBack?.()} />
                    <Spacer height={hp(3)} />

                    <TwoFactorContent code={code} setCode={setCode} />
                </View>

                <View style={[appStyles.row, styles.buttonRow]}>
                    <SimpleButton text="Cancel" styleView={styles.cancelBtn} />
                    <SimpleButton
                        text="Save"
                        disabled={!code}
                        textColor={!code ? colors.disableTextColor : colors.black}
                        styleView={{ ...styles.saveBtn, backgroundColor: !code ? colors.authButtonColor : colors.mainColor }}
                    />
                </View>
            </ScrollView>
        </AuthMainContainer>
    );
};

export default TwoFactorAuth;
