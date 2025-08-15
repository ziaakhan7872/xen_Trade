import { useRef, useState } from "react"
import { useSelector } from "react-redux";
import { WithdrawOnchain } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import Clipboard from '@react-native-clipboard/clipboard';
import { Alert } from "react-native";
import WAValidator from "multicoin-address-validator";
import { coinRegexValidation } from "../../../../constants/CoinRegexValidation/Index";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  useMicrophonePermission,
} from "react-native-vision-camera";

export const UseWidthDraw = (props) => {
  const WithdrawConfirmationRef = useRef(null)
  const { cryptoData, network } = props?.route?.params || {};
  const { user } = useSelector((state) => state.user);


  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(false);
  const [errorText,setErrorText] = useState("")
  const [fee, setFee] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [walletAddressError, setWalletAddressError] = useState(false)
  const [apiError, setApiError] = useState("")
  const [cameraActive, setCameraActive] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  


  const handleSubmit = async () => {
    const availableBalance = Number(cryptoData?.account?.amount || 0);
    const withdrawAmount = Number(amount);

    if (!withdrawAmount || withdrawAmount <= 0) {
      setApiError("Please enter a valid withdrawal amount.");
      return;
    }

    if (withdrawAmount > availableBalance) {
      setApiError("Withdrawal amount exceeds available balance.");
      return;
    }

    const receivedAmount = withdrawAmount + Number(network?.fee || 0)
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

      // if (response?.status === 200) {
      WithdrawConfirmationRef?.current?.close()
      setTimeout(() => {
        props?.navigation?.navigate(Routes?.WithdrawDetails, { CryptoData: cryptoData, network: network, response: responseData })
      }, 300);
      // } else {
      //   setApiError(response?.message || "Something went wrong. Try again.");
      // }

    } catch (error) {
      console.log("error in withdraw onchaib", error?.response?.data)
      const catchError = error?.response?.data

      // Check if API error is due to invalid address
      if (catchError?.message?.toLowerCase().includes("address")) {
        setWalletAddressError(true);
      }

      setApiError(catchError?.message || "Withdrawal failed. Please check your details.");

      if (catchError?.status) {
        setApiError(catchError?.message)
      }
    }
  }

  const handleCopy = (data) => {
    console.log(data)
    Clipboard.setString(data)
    Alert.alert("Copied to ClipBoard")
  }
  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        console.log(codes)
        setAddress(codes[0].value);
        setCameraActive(false);

      }
    },
  });

  const validateAddress = (address) => {
    const symbol = cryptoData?.account?.market?.symbol?.toUpperCase();
    const networkSYmbol = network?.standard;
    console.log(symbol, network?.standard,cryptoData)

    if ((symbol === "ETH" || symbol === "USDT" || symbol === "USDC") && networkSYmbol === "ERC20") {
      return /^0x[a-fA-F0-9]{40}$/.test(address); // EVM format
    } else if ((symbol === "BTC" && networkSYmbol === "BTC") || (symbol === "BTC" && networkSYmbol === "ERC20")) {
      return /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/.test(address);
    } else if (((symbol === "USDT" || symbol === "USDC") && networkSYmbol === "TRC20")) {
      return /^T[A-Za-z1-9]{33}$/.test(address); // Tron format
    } else if (symbol === "SOL" && networkSYmbol === "SOL") {
      return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address); // Solana format
    }

    return false;
  };

  return {
    WithdrawConfirmationRef,
    address, setAddress,
    amount, setAmount,
    error, setError, setErrorText,errorText,
    apiError, setApiError,
    walletAddressError, setWalletAddressError,
    fee, setFee,
    amountReceived, setAmountReceived,
    cryptoData, network,
    handleSubmit, handleCopy,
    validateAddress,
    codeScanner,
    cameraActive, setCameraActive,
    device
  }
}


