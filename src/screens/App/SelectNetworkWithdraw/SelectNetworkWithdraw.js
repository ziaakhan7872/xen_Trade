
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import images from '../../../images';
import { ScrollView, View } from 'react-native';
import Spacer from '../../../components/Spacer';
import { Routes } from '../../../constants';
import { MainHeader } from '../../../components/MainHeader';
import { NetworkList } from './Component/Index';
import { styles } from './Style';
import { UseSelectNetworkWithdraw } from './Hooks/Index';
import SkeletionLoader from '../../../components/SkeletonLoader';

const SelectNetworkWithdraw = (props) => {
  const {networkList,setNetworkList,handleNetworkPress,loading} = UseSelectNetworkWithdraw(props)
  return (
    <AuthMainContainer>
      <View style={styles.mainHeaderView}>
        <MainHeader onBackPress={()=>props?.navigation?.goBack()} leftImage={images.backArrow} title={"SELECT NETWORK"} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
        <Spacer/>
        {loading?<SkeletionLoader rows={5}/>:(
        <NetworkList Data={networkList} onPress={handleNetworkPress} />

        )}
      </ScrollView>
    </AuthMainContainer>
  );
};

export default SelectNetworkWithdraw;
