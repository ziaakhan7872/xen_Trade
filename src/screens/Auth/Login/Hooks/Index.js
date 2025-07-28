import { useState } from "react";


export const UseLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
  return {
    email,setEmail,
    password,setPassword,
    passwordVisible,setPasswordVisible
  }
}


