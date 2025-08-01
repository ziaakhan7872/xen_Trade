import { useState } from "react";
import { LoginApi } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import * as Yup from 'yup';
import Toast from "react-native-toast-message";



export const UseLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const showToast = () => {
    Toast.show({
      type: 'verificationAlert',
      text1: 'VERIFICATION EMAIL SENT',
      text2: 'Verification code sent to',
      visibilityTime: 1500,
      autoHide: true,
      props: "memememe"
    });
  };


  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async () => {
    const values = { email, password };

    try {
      await validationSchema.validate(values, { abortEarly: false });

      const payload = {
        email: email,
        password: password
      }
      console.log(payload, "login payload")
      const Login = await LoginApi(payload);

      console.log("Login successful:", Login);

      if (Login?.status === 200) {
        console.log("Entered in IF statement");
        showToast()

        // setTimeout(() => {
        props?.navigation.navigate(Routes.LoginVerificationScreen, { userData: Login?.data })
        // }, 1000)
      }

      setEmail("")
      setPassword("")
      setErrorMessage("")

    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrorMessage(error.errors.join('\n'));
      } else {
        console.error("Error during signup:", error);
        setErrorMessage("An error occurred during Login. Please try again.");
      }
    }

  }

  // const handleLogin = async () => {

  //   // setTimeout(() => {
  //   props?.navigation.navigate(Routes.LoginVerificationScreen)
  //   // }, 1000)
  // }

  return {
    email, setEmail,
    password, setPassword,
    passwordVisible, setPasswordVisible,
    handleLogin,
    errorMessage, setErrorMessage,
  }
}


