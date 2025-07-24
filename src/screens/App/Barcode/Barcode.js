
import React from 'react';
import { ScrollView, View } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import {
  BarcodeHeader,
  NetworkSelector,
  AddressSection,
  DetailsSection
} from './components';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { Routes } from '../../../constants';

const Barcode = (props) => {
  return (
    <AuthMainContainer >
      <BarcodeHeader BackPress={()=>props?.navigation?.goBack()} HistoryPress={()=>props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory,  })} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <NetworkSelector />
        <Spacer />
        <AddressSection />
        <Spacer/>
        <DetailsSection />
      </ScrollView>
    </AuthMainContainer>
  );
};

export default Barcode;


