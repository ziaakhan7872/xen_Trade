import { useState } from 'react'
import { Routes } from '../../../../constants';

const UseSignUp = (props) => {
        const [isChecked, setIsChecked] = useState(false);

         const handleCheckboxToggle = () => {
                setIsChecked(prevState => !prevState); 
            };
        const handleSignIn = ()=>{
           props?.navigation.navigate(Routes.LoginScreen)
        }
         const handleEmailVerification = ()=>{
            props?.navigation.navigate(Routes.EmailVerificationScreen)
        }
        

  return {
    setIsChecked,
    isChecked,
    handleCheckboxToggle,
    handleSignIn,
    handleEmailVerification

  }
}

export default UseSignUp

