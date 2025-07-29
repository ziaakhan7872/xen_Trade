import { useState } from 'react'
import { Routes } from '../../../../constants';
import { SignUpApi } from '../../../../constants/Api/Index';

const UseSignUp = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(prevState => !prevState);
  };
  const handleSignIn = () => {
    props?.navigation.navigate(Routes.LoginScreen)
  }
  const handleEmailVerification = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    if (!isChecked) {
      setErrorMessage("Please agree to the terms and conditions.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const SignUp = await SignUpApi({ email: email, password: password, phoneNo: phoneNumber, referredByCode: referralCode })
      console.log("Navigating to EmailVerificationScreen with userData:", SignUp);
      props?.navigation.navigate(Routes.EmailVerificationScreen, { userData: SignUp?.data })
      setErrorMessage('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPhoneNumber('');
      setReferralCode('');

    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred during signup. Please try again.");
    }
  }


  return {
    setIsChecked, isChecked,
    handleCheckboxToggle, handleSignIn, handleEmailVerification,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    errorMessage, setErrorMessage,
    phoneNumber, setPhoneNumber,
    referralCode, setReferralCode,
    isPasswordVisible, setIsPasswordVisible,
    isConfirmPasswordVisible, setIsConfirmPasswordVisible

  }
}

export default UseSignUp

