import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import Spacer from '../../../components/Spacer';
import { ScrollView, View } from 'react-native';
import { ResponsiveText } from '../../../components/ResponsiveText';
import { Routes } from '../../../constants';
import { PopularCrypto, SelectCryptoHeader, SelectCryptoRowButton, SelectCryptoSearchBox } from './Component/Index';
import { styles } from './Style';
import { hp } from '../../../components/ResponsiveComponent';
import { UseSelectCryptoWithdraw } from './Hooks/Index';


const SelectCryptoWithdraw = (props) => {
    const {cryptoList,CryptoPress,RecentCryptoPress} = UseSelectCryptoWithdraw(props)
    return (
        <AuthMainContainer>
            <SelectCryptoHeader BackPress={() => props?.navigation?.goBack()} historyPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
            <Spacer />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <SelectCryptoSearchBox />
                <Spacer height={hp(1)} />
                <View style={styles.otherContainer}>
                    <ResponsiveText style={styles.title}>RECENT</ResponsiveText>
                    <Spacer />
                    <SelectCryptoRowButton data={cryptoList} onPress={RecentCryptoPress} />
                    <Spacer />
                    <PopularCrypto data={cryptoList} onPress={CryptoPress} />
                </View>
            </ScrollView>


        </AuthMainContainer>
    );
};

export default SelectCryptoWithdraw

