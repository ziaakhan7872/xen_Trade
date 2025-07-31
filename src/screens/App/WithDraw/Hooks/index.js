import { useRef, useState } from "react"
import { useSelector } from "react-redux";
import { WithdrawOnchain } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";


export const UseWidthDraw = (props) => {
  const WithdrawConfirmationRef = useRef(null)
  const { cryptoData, network } = props?.route?.params || {};
  const { user } = useSelector((state) => state.user);

  console.log("cryptoData", cryptoData);
  console.log("network", network);
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
      console.log("payload",payload)
      const response = await WithdrawOnchain(payload)
      console.log(response)
      WithdrawConfirmationRef?.current?.close()
      setTimeout(() => {
        props?.navigation?.navigate(Routes?.WithdrawDetails,{CryptoData:cryptoData,network:network,response:response?.data?.data})
      }, 300);

    } catch (error) {
      console.log("error in withdraw onchaib", error)
    }
  }

  return {
    WithdrawConfirmationRef,
    address, setAddress,
    amount, setAmount,
    error, setError,
    fee, setFee,
    amountReceived, setAmountReceived,
    cryptoData, network,
    handleSubmit
  }
}


