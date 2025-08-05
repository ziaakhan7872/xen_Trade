import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { ALlCrypto, PopularCrypto, SelectCryptoHeader, SelectCryptoSearchBox } from './components';
import Spacer from '../../../components/Spacer';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { ResponsiveText } from '../../../components/ResponsiveText';
import { Routes } from '../../../constants';
import { useSelectCrypto } from './Hooks';
import { hp } from '../../../components/ResponsiveComponent';
import SkeletionLoader from '../../../components/SkeletonLoader';

const SelectCrypto = (props) => {
  const {
    cryptoList, loading, error, handleCryptoNavigation,
    searchCoin, setSearchCoin, papulaistrCryptoL,

  } = useSelectCrypto(props)

  return (
    <AuthMainContainer>
      <SelectCryptoHeader BackPress={() => props?.navigation?.goBack()} historyPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
      <Spacer height={hp(1)} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <SelectCryptoSearchBox searchCoin={searchCoin} setSearchCoin={setSearchCoin} />
        <Spacer />
        <View style={styles.otherContainer}>

          {loading ? (
            <SkeletionLoader rows={5} />
          ) : (
            papulaistrCryptoL?.length > 0 && (
              <>
                <ResponsiveText style={styles.title}>Popular</ResponsiveText>
                <Spacer />
                <PopularCrypto data={papulaistrCryptoL} onPress={handleCryptoNavigation} />
                <Spacer />
              </>
            )
          )}

          {loading ? (
            <SkeletionLoader rows={5} />
          ) : (
            cryptoList && cryptoList.length > 0 && (
              <>
                <ResponsiveText style={styles.title}>All Crypto</ResponsiveText>
                <Spacer />
                <ALlCrypto
                  data={cryptoList}
                  onPress={() =>
                    props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectNetwork })
                  }
                />
              </>
            )
          )}


        </View>
      </ScrollView>


    </AuthMainContainer>
  );
};

export default SelectCrypto