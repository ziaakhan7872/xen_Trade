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
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [Page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  console.log(isVisible, "bottomsheet");




  useEffect(() => {
    getCryptoData()
  }, [])

  const getCryptoData = async (newPage) => {
    if (hasMore) {

      try {
        setLoading(true)
        const getCryptoData = await GetCryptoListApi(newPage, 20)
        console.log("Crypto Data:", getCryptoData?.data?.data)
        setCryptoList(getCryptoData?.data?.data)

        const GetAccountDetail = await getAccountDetail(newPage, 20, user?.id);
        console.log("Account Details:", GetAccountDetail);

        const mergeData = getCryptoData?.data?.data?.map((item) => {
          const matchAccount = GetAccountDetail?.data?.data?.find((acount) => acount?.market?.symbol === item?.symbol);
          return {
            ...item,
            account: matchAccount || null,
          };

        });
        // setCryptoList(mergeData);

        if (mergeData.length > 0) {
          setCryptoList(prevFavorites => [...prevFavorites, ...mergeData]);
        }
        let offset = Page + 1
        setPage(offset)
        setHasMore(mergeData?.length === 20)
      } catch (error) {
        console.log("Error fetching crypto data:", error?.response);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
  }
  const handleWalletData = () => {
    if (Page) {
      getCryptoData(Page + 1);
    }
  };

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

  // const handleAssetOpen = () => { // gorhom sheet
  //   setTimeout(() => {
  //     assetSheetRef.current?.expand();
  //   }, 100)
  // }
  const handleAssetOpen = () => {
    setTimeout(() => {
      assetSheetRef.current?.open()
    }, 100)
  }

  const handleAssetClose = () => {
    assetSheetRef.current?.close();
  }
  const handleCheckboxToggle = () => {
    setIsChecked((prev) => !prev);
  };
  // const cryptoSheetRef = useRef();

  return {
    selectedCrypto, setSelectedCrypto,
    isChecked, setIsChecked,
    handleCheckboxToggle,
    input, setInput,
    assetSheetRef,
    cryptoList: filteredCryptoList,
    setSearchCoin, searchCoin,
    totalUsdt, loading, handleAssetClose, handleAssetOpen, handleWalletData
  }
}

