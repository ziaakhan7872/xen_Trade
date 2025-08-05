import { useState } from 'react'
import { Routes } from '../../../../constants';
import { SignUpApi } from '../../../../constants/Api/Index';
import * as Yup from 'yup';

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
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    referralCode: Yup.string().optional(),
    isChecked: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleEmailVerification = async () => {
    const values = { email, password, confirmPassword, referralCode, isChecked };


    try {
      await validationSchema.validate(values, { abortEarly: false });
      const payload = {
        email: email,
        password: password,
        phoneNo: phoneNumber,
        referredByCode: referralCode
      }
      const SignUp = await SignUpApi(payload)
      console.log("Navigating to EmailVerificationScreen with userData:", SignUp);
      props?.navigation.navigate(Routes.EmailVerificationScreen, { userData: SignUp })
      setErrorMessage('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPhoneNumber('');
      setReferralCode('');

    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrorMessage(error.errors.join('\n'));

      } else if (error?.response) {
        const status = error?.response?.status
        const message = error?.response?.data?.message || "Signup failed"
        if (status === 409) {
          setErrorMessage(message)
        }
        else {
          setErrorMessage("An error occurred during signup. Please try again.");
        }
        console.error("Error during signup:", error?.response);
      }
      else {
        console.log("errpr", error)
        setErrorMessage("A Network Error . Please try again.");

      }
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
    isConfirmPasswordVisible, setIsConfirmPasswordVisible,
  }
}

export default UseSignUp

