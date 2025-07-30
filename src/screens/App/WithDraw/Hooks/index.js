import { useRef, useState } from "react"


export const UseWidthDraw = (props) => {
    const WithdrawConfirmationRef = useRef(null)
    const { cryptoData, network } = props?.route?.params || {};
    console.log("cryptoData", cryptoData);
    console.log("network", network);
 
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [fee,setFee] = useState('0.39');
    const [amountReceived, setAmountReceived] = useState('7.61');

  return {
    WithdrawConfirmationRef,
    address,setAddress,
    amount,setAmount,
    error,setError,
    fee,setFee,
    amountReceived,setAmountReceived,
    cryptoData, network,
  }
}


