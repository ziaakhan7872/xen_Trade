import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { ALlCrypto, PopularCrypto, SelectCryptoHeader, SelectCryptoSearchBox } from './components';
import Spacer from '../../../components/Spacer';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { ResponsiveText } from '../../../components/ResponsiveText';
import { Routes } from '../../../constants';
import { useSelectCrypto } from './Hooks';

const SelectCrypto = (props) => {
  const { DisplayNetworkList } = useSelectCrypto(props)
  const cryptoList = props.route?.params?.cryptoList // get passed data from API while navigating to SelectCrypto
  console.log("Crypto List Data|||", cryptoList)

  return (
    <AuthMainContainer>
      <SelectCryptoHeader BackPress={() => props?.navigation?.goBack()} historyPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
      <Spacer />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <SelectCryptoSearchBox />
        <Spacer />
        <View style={styles.otherContainer}>
          <ResponsiveText style={styles.title}>Popular</ResponsiveText>
          <Spacer />
          {/* <PopularCrypto data={cryptoList} onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectNetwork })} /> */}
          <PopularCrypto data={cryptoList} onPress={DisplayNetworkList} />
          <Spacer />
          <ResponsiveText style={styles.title}>All Crypto</ResponsiveText>
          <Spacer />
          <ALlCrypto data={cryptoList} onPress={DisplayNetworkList} />
        </View>
      </ScrollView>


    </AuthMainContainer>
  );
};

export default SelectCrypto