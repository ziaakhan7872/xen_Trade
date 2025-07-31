import { useRef, useState } from "react"
import { useSelector } from "react-redux";
import { WithdrawOnchain } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import Clipboard from '@react-native-clipboard/clipboard';
import { Alert } from "react-native";



export const UseWidthDraw = (props) => {
  const WithdrawConfirmationRef = useRef(null)
  const { cryptoData, network } = props?.route?.params || {};
  const { user } = useSelector((state) => state.user);
  
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(false);
  const [fee, setFee] = useState('0.39');
  const [amountReceived, setAmountReceived] = useState('7.61');


  const handleSubmit = async () => {
    const receivedAmount = Number(amount) + Number(network?.fee || 0)
    try {
      const payload = {
        userId: user?.id,
        market: cryptoData?.account?.market?.symbol,
        amount: receivedAmount,
        recipientAddress: address,
        chain: network?.name
      }
      console.log("payload", payload)
      const response = await WithdrawOnchain(payload)
      const responseData = response.data;  
      console.log("Response Data:", responseData);
      WithdrawConfirmationRef?.current?.close()
      setTimeout(() => {
        props?.navigation?.navigate(Routes?.WithdrawDetails, { CryptoData: cryptoData, network: network, response: responseData })
      }, 300);

    } catch (error) {
      console.log("error in withdraw onchaib", error)
    }
  }

  const handleCopy = (data) => {
    console.log(data)
    Clipboard.setString(data)
    Alert.alert("Copied to ClipBoard")
  }



  return {
    WithdrawConfirmationRef,
    address, setAddress,
    amount, setAmount,
    error, setError,
    fee, setFee,
    amountReceived, setAmountReceived,
    cryptoData, network,
    handleSubmit,
    handleCopy
  }
}


