import React from 'react'

export const useDepositDetails = (props) => {
    const {response} = props?.route?.params || {}
    console.log(response,"response from previous screen")
    return {
        response
    }
}
