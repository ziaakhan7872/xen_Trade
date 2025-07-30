
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { SelectNetworkHeader, NetworkList } from './components';
import { MainHeader } from '../../../components/MainHeader';
import images from '../../../images';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { Routes } from '../../../constants';

const SelectNetwork = (props) => {
  const networkList = props.route?.params?.networkList // get passed data from API while navigating to SelectNetwork
  console.log("NETWORKS DATA|||", networkList);


  return (
    <AuthMainContainer>
      <View style={styles.mainHeaderView}>
        <MainHeader onBackPress={() => props?.navigation?.goBack()} leftImage={images.backArrow} title={"SELECT NETWORK"} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Spacer />
        <NetworkList data={networkList} onPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.Barcode, })} />
      </ScrollView>
    </AuthMainContainer>
  );
};

export default SelectNetwork;
