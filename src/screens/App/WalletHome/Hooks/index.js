import { useEffect, useRef, useState } from 'react'
import { getAccountDetail, GetCryptoListApi } from '../../../../constants/Api/Index';
import { useSelector } from 'react-redux';
import { Keyboard } from 'react-native';
import { colors } from '../../../../constants';
import { hp } from '../../../../components/ResponsiveComponent';

export const useHomeScreen = (props) => {
  const { user } = useSelector((state) => state.user);
  const assetSheetRef = useState(null);

  

  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState('')
  const [cryptoList, setCryptoList] = useState([]);
  const [searchCoin, setSearchCoin] = useState("")
  const [totalUsdt, setTotalUsdt] = useState("")
  const [filteredCryptoList, setFilteredCryptoList] = useState([]);
  const [loading , setLoading ] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

    console.log(isVisible,"bottomsheet");

      useEffect(() => {
    if (isVisible && assetSheetRef.current) {
      // Ensure the BottomSheet expands when isVisible is true
      assetSheetRef.current.expand();
    }
  }, [isVisible]);
 
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
         props.navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
         
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsVisible(false); 
       
    props.navigation.setOptions({
      tabBarStyle: {
        paddingTop: hp(0.9),
        backgroundColor: colors.bottomTabColor,
        borderTopWidth: 0,
      }, 
    });
      }
    );

    return () => {
      // Clean up listeners on component unmount
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  useEffect(() => {
    getCryptoData()
  }, [])

  const getCryptoData = async () => {
    try {
      setLoading(true)
      const getCryptoData = await GetCryptoListApi(1, 10)
      console.log("Crypto Data:", getCryptoData?.data?.data)
      setCryptoList(getCryptoData?.data?.data)

      const GetAccountDetail = await getAccountDetail(1, 10, user?.id);
      console.log("Account Details:", GetAccountDetail);

      const mergeData = getCryptoData?.data?.data?.map((item) => {
        const matchAccount = GetAccountDetail?.data?.data?.find((acount) => acount?.market?.symbol === item?.symbol);
        return {
          ...item,
          account: matchAccount || null,
        };
      });
      setCryptoList(mergeData);

      // const getAccountAMount = GetAccountDetail?.data?.data
      // const total = getAccountAMount.reduce((sum, item) => {
      //   const value = parseFloat(item?.amount) || 0
      //   return sum + value
      // },0)
      //       console.log("Merged Crypto Data:", total);

      // setTotalUsdt(total)
      // console.log("Merged Crypto Data:", mergeData);


    } catch (error) {
      console.log("Error fetching crypto data:", error?.response);
      setLoading(false)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    let filtered = cryptoList.filter(
      (item) =>
        item?.name?.toLowerCase().includes(searchCoin.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchCoin.toLowerCase())
    );

    if (isChecked) {
      filtered = filtered.filter(
        (item) => parseFloat(item?.account?.amount) > 0
      );
    }

    setFilteredCryptoList(filtered);
  }, [cryptoList, searchCoin, isChecked]);

  

 

   const handleCheckboxToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return {
    selectedCrypto, setSelectedCrypto,
    isChecked, setIsChecked,
    handleCheckboxToggle,
    input, setInput,
    assetSheetRef,
    cryptoList: filteredCryptoList,
    setSearchCoin, searchCoin,
    totalUsdt,loading,isVisible,setIsVisible
  }
}

