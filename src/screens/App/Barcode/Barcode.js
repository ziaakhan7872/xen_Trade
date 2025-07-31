
import { ScrollView } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { BarcodeHeader, NetworkSelector, AddressSection, DetailsSection } from './components';
import Spacer from '../../../components/Spacer';
import { Routes } from '../../../constants';
import useBarcode from './Hooks';

const Barcode = (props) => {
  const { networkList, previousCrypto, depositDetailData } = useBarcode(props)
  // console.log("previousCryptopreviousCrypto", previousCrypto);
  console.log("networkListnetworkListnetworkList", networkList)
  console.log("depositDetailDatadepositDetailDatadepositDetailData", depositDetailData)


  return (
    <AuthMainContainer >
      <BarcodeHeader previousCrypto={previousCrypto} BackPress={() => props?.navigation?.goBack()} HistoryPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory, })} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <NetworkSelector networkList={networkList} walletAddress={depositDetailData} />
        <Spacer />
        <AddressSection walletAddress={depositDetailData} />
        <Spacer />
        <DetailsSection networkList={networkList} walletAddress={depositDetailData} />
      </ScrollView>
    </AuthMainContainer>
  );
};

export default Barcode;


