
import React from 'react';
import { ScrollView } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { 
  BarcodeHeader, 
  NetworkSelector, 
  QRCodeDisplay, 
  AddressSection, 
  DetailsSection 
} from './components';
import { styles } from './styles';

const Barcode = () => {
  return (
    <AuthMainContainer >
      
        <BarcodeHeader />
        <NetworkSelector />
        <QRCodeDisplay />
        <AddressSection />
        <DetailsSection />
      
    </AuthMainContainer>
  );
};

export default Barcode;
