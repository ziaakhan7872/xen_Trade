
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
  return (
    <AuthMainContainer>
      <View style={styles.mainHeaderView}>
        <MainHeader onBackPress={()=>props?.navigation?.goBack()} leftImage={images.backArrow} title={"SELECT NETWORK"} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
        <Spacer/>
        <NetworkList onPress={()=>props?.navigation?.navigate(Routes.AppNavigator, {screen: Routes.Barcode,})} />
      </ScrollView>
    </AuthMainContainer>
  );
};

export default SelectNetwork;
