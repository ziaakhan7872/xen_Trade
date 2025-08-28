import { useEffect, useMemo, useRef, useState } from 'react'
import { getAccountDetail, GetCryptoListApi } from '../../../../Backend/Api/Index';
import { useSelector } from 'react-redux';

export const useHomeScreen = (props) => {
  const { user } = useSelector((state) => state.user);
  const assetSheetRef = useRef(null);



  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState('')
  const [cryptoList, setCryptoList] = useState([]);
  const [searchCoin, setSearchCoin] = useState("")
  const [totalUsdt, setTotalUsdt] = useState("")
  const [loading, setLoading] = useState(false)
  const [Page, setPage] = useState(1)



  useEffect(() => {
    // only start when we have a user id (prevents 401 + wasted work)
    getCryptoData();

  }, []);

  const getCryptoData = async (newPage=1) => {
    try {

      setLoading(true)
      const getCryptoResponse = await GetCryptoListApi(newPage, 10)
      console.log("Crypto Data:", getCryptoResponse?.data?.data)

      const GetAccountDetail = await getAccountDetail(newPage, 10, user?.id);
      console.log("Account Details:", GetAccountDetail);

      const mergeData = getCryptoResponse?.data?.data?.map((item) => {
        const matchAccount = GetAccountDetail?.data?.data?.find((acount) => acount?.market?.symbol === item?.symbol);
        return {
          ...item,
          account: matchAccount || null,
        };
      });
      setPage(newPage)
      if (mergeData.length > 0) {
        setCryptoList(prev => newPage === 1 ? mergeData : [...prev, ...mergeData]);
      }

    } catch (error) {
      console.log("Error fetching crypto data:", error?.response);
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }


  const handleWalletData = () => {
    console.log("handleWalletData called");
    // if(!searchCoin) {
    //   if (Page) {
    //     getCryptoData(Page + 1);
    //   }
    // }
  };

 const filteredCoinList = useMemo(() => {
  let filtered = cryptoList?.filter(
    (item) =>
      item?.name?.toLowerCase().includes(searchCoin.toLowerCase()) ||
      item?.symbol?.toLowerCase().includes(searchCoin.toLowerCase())
  );

  if (isChecked) {
    filtered = filtered.filter(
      (item) => parseFloat(item?.account?.amount || 0) > 0
    );
  }

  return filtered;
}, [cryptoList, searchCoin, isChecked]);



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

  return {
    selectedCrypto, setSelectedCrypto,
    isChecked, setIsChecked,
    handleCheckboxToggle,
    input, setInput,
    assetSheetRef,
    cryptoList: filteredCoinList,
    setSearchCoin, searchCoin,
    totalUsdt, loading, handleAssetClose, handleAssetOpen, handleWalletData,
  }
}

