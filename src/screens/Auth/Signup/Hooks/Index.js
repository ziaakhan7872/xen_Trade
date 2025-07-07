import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { Routes } from '../../../../constants';

const UseSignUp = () => {
    const navigation = useNavigation()
        const [isChecked, setIsChecked] = useState(false);

         const handleCheckboxToggle = () => {
                setIsChecked(prevState => !prevState); 
            };
        const handleSignIn = ()=>{
            navigation.navigate(Routes.LoginScreen)
        }
         const handleEmailVerification = ()=>{
            navigation.navigate(Routes.EmailVerificationScreen)
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

