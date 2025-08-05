import { useState } from "react";
import { LoginApi } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import * as Yup from 'yup';

export const UseLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")


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
        // showToast()

        // setTimeout(() => {
        props?.navigation.navigate(Routes.LoginVerificationScreen, { userData: Login?.data, userEmail: payload?.email })
        // }, 1000)
      }

      setEmail("")
      setPassword("")
      setErrorMessage("")

    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrorMessage(error.errors.join('\n'));
      } else if (error?.response) {
        const status = error?.response?.status
        const message = error?.response?.data?.message || "Login Failed"
        console.log("api  in screen", error?.response)
        if (status === 404 || status === 401) {
          setErrorMessage(message)
        }
        else {
          setErrorMessage("Login error, please try again later");
        }
      } else {
        console.log(error,"else error")
        setErrorMessage("Network error, please try again later");
      }
    }
  }

  const goToForgotPassword = () => {
    props?.navigation?.navigate?.(Routes.ForgotPassword)
  }

  return {
    email, setEmail,
    password, setPassword,
    passwordVisible, setPasswordVisible,
    handleLogin,
    errorMessage, setErrorMessage,
    goToForgotPassword,
  }
}


