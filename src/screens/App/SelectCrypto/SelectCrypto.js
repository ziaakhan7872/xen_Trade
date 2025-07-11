import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { SelectCryptoContent,SelectCryptoHeader } from './components';

const SelectCrypto = () => {
  const bottomSheetRef = useRef(null);
  
 

  return (
    <AuthMainContainer>
      <SelectCryptoHeader />
      <SelectCryptoContent 
        refProp={bottomSheetRef}
      />
    </AuthMainContainer>
  );
};

export default SelectCrypto

