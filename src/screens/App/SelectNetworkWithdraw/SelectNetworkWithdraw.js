
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import images from '../../../images';
import { ScrollView, View } from 'react-native';
import Spacer from '../../../components/Spacer';
import { Routes } from '../../../constants';
import { MainHeader } from '../../../components/MainHeader';
import { NetworkList } from './Component/Index';
import { styles } from './Style';

const SelectNetworkWithdraw = (props) => {
  return (
    <AuthMainContainer>
      <View style={styles.mainHeaderView}>
        <MainHeader onBackPress={()=>props?.navigation?.goBack()} leftImage={images.backArrow} title={"SELECT NETWORK"} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
        <Spacer/>
        <NetworkList onPress={()=>props?.navigation?.navigate(Routes.AppNavigator, {screen: Routes.WithDraw,})} />
      </ScrollView>
    </AuthMainContainer>
  );
};

export default SelectNetworkWithdraw;
