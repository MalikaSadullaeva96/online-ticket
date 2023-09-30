import React, { useState } from "react";
// import { userRegister } from "../../App";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function Login() {
  // const { register } = useContext(userRegister);
  const [register, setRegister] =useState(true)

  return <>{register ? <RegisterPage /> : <LoginPage />}</>;
}
