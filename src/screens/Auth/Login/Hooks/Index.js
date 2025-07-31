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
      const Login = await LoginApi(payload);
      console.log("Login successful:", Login);
      props?.navigation.navigate(Routes.LoginVerificationScreen, { userData: Login?.data })

    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrorMessage(error.errors.join('\n'));
      } else {
        console.error("Error during signup:", error);
        setErrorMessage("An error occurred during signup. Please try again.");
      }
    }

  }
  return {
    email, setEmail,
    password, setPassword,
    passwordVisible, setPasswordVisible,
    handleLogin,
    errorMessage, setErrorMessage
  }
}


