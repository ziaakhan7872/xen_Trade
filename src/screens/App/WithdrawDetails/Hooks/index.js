

export const UseWithdrawDetail = (props) => {
  const { CryptoData, network,response } = props?.route?.params || {};
  console.log("crypodata, ", CryptoData)
  console.log("network, ", network)
  console.log("response, ", response)


  return {
    CryptoData,network,response
  }
}


