
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { NetworkList } from './components';
import { MainHeader } from '../../../components/MainHeader';
import images from '../../../images';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { useSelectNetwork } from './Hooks';
import SkeletionLoader from '../../../components/SkeletonLoader';

const SelectNetwork = (props) => {
  const { handleNetworkNavigation, networkList,loading } = useSelectNetwork(props)

  return (
    <AuthMainContainer>
      <View style={styles.mainHeaderView}>
        <MainHeader onBackPress={() => props?.navigation?.goBack()} leftImage={images.backArrow} title={"SELECT NETWORK"} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Spacer />
        {loading? <SkeletionLoader rows={5}/>:(
        <NetworkList data={networkList} onPress={handleNetworkNavigation} />
        )}
      </ScrollView>
    </AuthMainContainer>
  );
};

export default SelectNetwork;
