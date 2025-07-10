
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { SelectNetworkHeader, NetworkList } from './components';

const SelectNetwork = () => {
  return (
    <AuthMainContainer>
      <SelectNetworkHeader />
      <NetworkList />
    </AuthMainContainer>
  );
};

export default SelectNetwork;

