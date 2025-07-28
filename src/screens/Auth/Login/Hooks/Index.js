import { useState } from "react";
import { LoginApi } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";


export const UseLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const Login =  await LoginApi({ email:email, password:password });
      console.log("Login successful:", Login);
      props?.navigation.navigate(Routes.LoginVerificationScreen, { userData: Login?.data })

      } catch (error) {
        console.error("Login failed:", error);
      }

    }
  return {
    email, setEmail,
    password, setPassword,
    passwordVisible, setPasswordVisible,
    handleLogin
  }
}


